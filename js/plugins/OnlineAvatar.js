//=============================================================================
// OnlineAvatar.js
// PUBLIC DOMAIN
// ----------------------------------------------------------------------------
// （これ以前の更新履歴は記録していません）
// 2016/10/25 スイッチ・変数同期時、ツクール上とサーバー上でデータが食い違う不具合を修正しました
// 2016/11/09 同じマップへの場所移動時、アバターが分身するのを修正しました
// 2016/11/14 イベント動的生成プラグイン(EventReSpawn.js)との競合対策
// 2018/10/12 firebaseのデータベース作成方法が変わったので、プラグインヘルプの手順に追記
//=============================================================================

/*:
 * @plugindesc Firebaseを使ってプレイヤーをオンライン同期します。
 * @author くらむぼん
 *
 * @param apiKey
 * @desc FirebaseのapiKey。各自コピペしてきてね
 * @default *******************
 *
 * @param authDomain
 * @desc FirebaseのauthDomain。各自コピペしてきてね
 * @default **********.firebaseapp.com
 *
 * @param databaseURL
 * @desc FirebaseのdatabaseURL。各自コピペしてきてね
 * @default https://**********.firebaseio.com
 *
 * @param avatarEvent
 * @desc アバターにコピーするコモンイベントの番号。0でアバター機能そのものをオフ
 * @default 1
 *
 * @param syncSwitchStart
 * @desc 全プレイヤーでオンライン共有するスイッチの番号の始まり。両方0で共有機能そのものをオフ
 * @default 11
 *
 * @param syncSwitchEnd
 * @desc 全プレイヤーでオンライン共有するスイッチの番号の終わり。両方0で共有機能そのものをオフ
 * @default 20
 *
 * @param syncVariableStart
 * @desc 全プレイヤーでオンライン共有する変数の番号の始まり。両方0で共有機能そのものをオフ
 * @default 11
 *
 * @param syncVariableEnd
 * @desc 全プレイヤーでオンライン共有する変数の番号の終わり。両方0で共有機能そのものをオフ
 * @default 20
 *
 * @help
 * 外部のBaaSであるFirebaseと連携して、MMORPGのような
 * オンラインのアバター（プレイヤーキャラ）表示に対応するプラグインです。
 * さらにスイッチ・変数同期機能も付け加えてみました。
 * 
 * 始め方：
 * １．Firebaseの公式サイト(https://console.firebase.google.com/)で、
 * 　　Googleアカウントを(持って無ければ)取得し、「新規プロジェクトを作成」する
 * ２．「ウェブアプリにFirebaseを追加」ボタンを押して
 * 　　apiKey、authDomain、databaseURLをプラグインのパラメータにコピペ
 * ３．左メニューから「Authentication」→上部から「ログイン方法」→「匿名」を有効にする
 * ４．左メニューから「Database」->「またはRealtime Databaseを選択」の中の「データベースを作成」を押す
 * ５．現れた選択肢の中から「テストモードで開始」を選択して、有効にする
 * ６．ゲームを多重起動すると、すべてのプレイヤーのアバターが画面に表示されます！
 * ※テストプレイボタンからは多重起動できないので、Firefoxからindex.htmlを開く
 * 
 * ！注意！
 * 多くの投稿サイトでは安全のためContent Security Policyという機能により
 * Firebaseへのオンライン通信が制限されています。
 * もしあなたがこのプラグインを使ったゲームを投稿する予定がある場合は、
 * その投稿先でこのプラグインが使えるかどうか必ず先に確かめておいてください！
 * 
 * 
 * スイッチ・変数の同期：
 * syncSwitchStart、syncSwitchEnd、syncVariableStart、syncVariableEndの
 * ４つのパラメータで「同期したいスイッチと変数の範囲」を設定します。
 * （初期設定ではスイッチ・変数共に11～20の番号が共有されます）
 * その範囲のスイッチ・変数はオンライン通信によって全プレイヤーで
 * 同じ値が共有されます！これによりアバターを出すだけに留まらず
 * オンラインを利用した様々な種類のゲームを作れる…と思います。
 * 
 * 応用編：
 * 画面に表示されるアバターは、avatarEventで指定した番号のコモンイベントの
 * 「実行内容」を自分自身の実行内容にコピーし、並列処理扱いで実行します。
 * これと下記のプラグインコマンドを組み合わせるとチャットとかも実装できます。
 * 詳しくはサンプル見てね→https://krmbn0576.github.io/rpgmakermv/
 * 
 * プラグインコマンド：
 * online 1 to chat　変数１番の内容を「chat」という名前で送信します。
 * online 1 from chat　「そのアバターが」送信した「chat」を変数１番に代入します。
 * 
 * ライセンス：
 * このプラグインの利用法に制限はありません。お好きなようにどうぞ。
 */

function OnlineManager() {
    throw new Error('This is a static class');
}

function Game_Avatar() {
    this.initialize.apply(this, arguments);
}

(function () {
    'use strict';
    OnlineManager.parameters = PluginManager.parameters('OnlineAvatar');
    OnlineManager.url = 'https://www.gstatic.com/firebasejs/live/3.0/firebase.js';
    //OnlineManager.avatarTemplate = {"id":0,"meta":{},"name":"","note":"","pages":[{"conditions":{"actorId":1,"actorValid":false,"itemId":1,"itemValid":false,"selfSwitchCh":"A","selfSwitchValid":false,"switch1Id":1,"switch1Valid":false,"switch2Id":1,"switch2Valid":false,"variableId":1,"variableValid":false,"variableValue":0},"directionFix":false,"image":{"tileId":0,"characterName":"","direction":2,"pattern":1,"characterIndex":0},"list":null,"moveFrequency":5,"moveRoute":{"list":[{"code":45,"parameters":["this.moveOnlineXy()"],"indent":null},{"code":0,"parameters":[]}],"repeat":true,"skippable":false,"wait":false},"moveSpeed":5,"moveType":3,"priorityType":1,"stepAnime":false,"through":true,"trigger":4,"walkAnime":true}],"x":0,"y":0};
    //OnlineManager.avatarsInThisMap = null;
    OnlineManager.mapRef = null;
    OnlineManager.selfRef = null;
    OnlineManager.switchRef = null;
    OnlineManager.variableRef = null;
    OnlineManager.unitRef = null;
    OnlineManager.userRef = null;
    //OnlineManager.tempRef = null;
    OnlineManager.sysRef = null;
    OnlineManager.user = null;
    OnlineManager.syncBusy = false;	//同期接続する瞬間、送信が受信を上書きするのを阻止

    //ネット上からfirebaseファイルを読み込む
    OnlineManager.initialize = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.url;
        script.async = true;
        script.onload = this.awake.bind(this);
        script.onerror = function (e) {
            throw new Error('firebaseの読み込みに失敗しました。F5でやり直してみてください。');
        };
        document.body.appendChild(script);
    };

    //firebaseを起動
    OnlineManager.awake = function () {
        var ps = this.parameters;
        ps['avatarEvent'] = +ps['avatarEvent'];
        ps['syncSwitchStart'] = +ps['syncSwitchStart'];
        ps['syncSwitchEnd'] = +ps['syncSwitchEnd'];
        ps['syncVariableStart'] = +ps['syncVariableStart'];
        ps['syncVariableEnd'] = +ps['syncVariableEnd'];

        try {
            firebase.initializeApp({ apiKey: ps['apiKey'], authDomain: ps['authDomain'], databaseURL: ps['databaseURL'] });
        } catch (e) {
            throw new Error('apiKeyが正しく設定されていません。ご確認ください。');
        }

        this.auth();
    };

    //firebaseアプリにアクセスして匿名サインイン
    //パスワード認証とかTwitter連携認証でログインさせたい場合はこのメソッドを改造しましょう
    OnlineManager.auth = function () {
        firebase.auth().signInAnonymously().then(this.start.bind(this)).catch(SceneManager.catchException.bind(SceneManager));
    };

    //サインイン完了後
    //オンライン接続のイベント登録に関する記述(xxxRef.on()とか)が書いてある関数はこのメソッドから呼び出すと良さげ
    OnlineManager.start = function (user) {
        //if (!$gameSwitches.value(15)) return;
        this.user = user;

        //再接続時にonDisconnectを張り直す
        var connectedRef = firebase.database().ref('.info/connected');
        connectedRef.on('value', function (data) {
            if (data.val() && OnlineManager.selfRef) OnlineManager.selfRef.onDisconnect().remove();
        });

        this.userRef = firebase.database().ref('users');
        this.selfRef = this.userRef.child(this.user.uid);
        this.selfRef.onDisconnect().remove();	//切断時にキャラ座標をリムーブ
        this.sendPlayerInfo();
        //this.sysRef.onDisconnect().remove();


        //this.tempRef.onDisconnect().remove();
        //OnlineManager.sendTempInfo();
        //this.tempRef = firebase.database().ref('temps');
        //this.tempRef.onDisconnect().remove();
        //OnlineManager.sendTempInfo();

        //ユーザーが退場
        this.userRef.on('child_removed', function (data) {
            //if (avatarsInThisMap[data.key]) avatarsInThisMap[data.key].erase();
            //delete avatarsInThisMap[data.key];
            OnlineManager.removeUserInfo();
        });

        //接続が最初のマップ読み込みよりも遅延した時は、今いるマップのオンラインデータを購読
        if (this.mapExists()) this.connectNewMap();

        if ($gameSwitches) this.startSync();
    };

    //スイッチと変数のオンライン同期の開始
    OnlineManager.startSync = function () {
        if (!this.user) return;

        if (this.parameters['syncSwitchStart'] || this.parameters['syncSwitchEnd']) {
            if (this.switchRef) this.switchRef.off();
            else this.switchRef = firebase.database().ref('switches');
            OnlineManager.syncBusy = true;
            this.switchRef.once('value', function (data) {
                OnlineManager.syncBusy = false;
            });
            this.switchRef.on('child_added', function (data) {
                $gameSwitches.setValue(data.key, data.val(), true);
            });
            this.switchRef.on('child_changed', function (data) {
                $gameSwitches.setValue(data.key, data.val(), true);
            });
        }

        if (this.parameters['syncVariableStart'] || this.parameters['syncVariableEnd']) {
            if (this.variableRef) this.variableRef.off();
            else this.variableRef = firebase.database().ref('variables');
            OnlineManager.syncBusy = true;
            this.variableRef.once('value', function (data) {
                OnlineManager.syncBusy = false;
            });
            this.variableRef.on('child_added', function (data) {
                $gameVariables.setValue(data.key, data.val(), true);
            });
            this.variableRef.on('child_changed', function (data) {
                $gameVariables.setValue(data.key, data.val(), true);
            });
        }
        if (this.sysRef) this.sysRef.off();
        else this.sysRef = firebase.database().ref('system');
        OnlineManager.syncBusy = true;
        this.sysRef.once('value', function (data) {
            OnlineManager.syncBusy = false;
        });
        this.sysRef.on('child_added', function (data) {
            //$gameVariables.setValue(data.key, data.val(), true);
        });
        this.sysRef.on('child_changed', function (data) {
            //$gameVariables.setValue(data.key, data.val(), true);
        });
        if (this.unitRef) this.unitRef.off();
        else this.unitRef = firebase.database().ref('units');
        OnlineManager.syncBusy = true;
        this.unitRef.once('value', function (data) {
            OnlineManager.syncBusy = false;
        });
        this.unitRef.on('child_added', function (data) {
            //$gameVariables.setValue(data.key, data.val(), true);
        });
        this.unitRef.on('child_changed', function (data) {
            //$gameVariables.setValue(data.key, data.val(), true);
        });
    };

    //新しいマップのオンラインデータを購読してアバターの情報を受け取る
    OnlineManager.connectNewMap = function () {
        if (!this.user || !this.parameters['avatarEvent']) return;

        //前のマップのコールバックはデタッチして、座標情報をリムーブ
        if (this.mapRef) {
            this.mapRef.off();
        }

        if (!$dataMap.meta || $dataMap.meta.avatar_off) {
            this.mapRef = null;
            //this.avatarsInThisMap = null;
            return;
        }

        this.mapRef = firebase.database().ref('map' + $gameMap.mapId().padZero(3));

        //this.mapRef.once('value', parent => alert('Count: ' + parent.numChildren())); //要素数を取得

        /*
        var avatarTemplate = this.avatarTemplate;
        var avatarsInThisMap = this.avatarsInThisMap = {};
        if (!avatarTemplate.pages[0].list) {
            avatarTemplate.pages[0].list = $dataCommonEvents[this.parameters['avatarEvent']].list;
        }
        */
        //他プレイヤーが同マップに入場(gameSystem._allyTeamIDに直接割り振った方がいい？、プレイヤー自体をマップから独立させて)
        this.mapRef.on('child_added', function (data) {
            //avatarsInThisMap[data.key] = new Game_Avatar(avatarTemplate, data.val());
        });

        this.sendPlayerInfo();
    };

    //送信するプレイヤー情報(ユニットの情報もここで送信するか？)
    OnlineManager.playerInfo = function () {
        var $ = $gamePlayer;
        return { x: $.x, y: $.y, direction: $.direction(), speed: $.realMoveSpeed(), charaName: $.characterName(), charaIndex: $.characterIndex() };
    };

    //プレイヤー情報をオンライン上に送信
    OnlineManager.sendPlayerInfo = function () {
        if (this.selfRef) this.selfRef.update(this.playerInfo());
    };

    //ユニット情報を送信(unitsはプレイヤーごとにわけて4体4体で編成させた方がいいか)
    //敵と味方どういう風にわけるか
    OnlineManager.sendUnitInfo = function (eventId) {
        if (this.unitRef && !this.syncBusy) {
            var send = {};
            for (var i = 0; i < $gameSystem.unitList().length; i++) {
                var $ = $gameSystem.unitList()[i];
                if (eventId && eventId != $gameSystem.unitList()[i].event().id) continue;
                send[i] = {
                    x: $._x, y: $._y, direction: $.direction(), toX: $.toX(), toY: $.toY(), target: $._target, useSkill: $._useSkill, hp: $.isActor()._hp, mp: $.isActor()._mp, tp: $.isActor()._tp, wt: $.isActor()._wt, states: $.isActor()._states, stateTurns: $.isActor()._stateTurns
                };
                //以下action
                //var action = $.isActor().currentAction();
                var result = $.isActor().result();
                if (result) {
                    send[i].missed = result.missed;
                    send[i].evaded = result.evaded;
                    send[i].critical = result.critical;
                    if (result.hpAffected) send[i].hpDamage = result.hpDamage;
                    send[i].addedStates = result.addedStates;
                    send[i].removedStates = result.removedStates;
                }
            }
            this.unitRef.update(send);
        }
    };
    //システム情報を送信
    OnlineManager.sendSysInfo = function () {
        if (this.sysRef && !this.syncBusy) {
            //var send = $gameSystem;
            var $ = $gameSystem;
            var send = {
                //_allyTeamID: $._allyTeamID, _enemyTeamID: $._enemyTeamID, _isAllyTurn: $._isAllyTurn, _isEnemyTurn: $._isEnemyTurn
                _allyTeamID: $._allyTeamID, _enemyTeamID: $._enemyTeamID, _isAllyTurn: $._isAllyTurn, _isEnemyTurn: $._isEnemyTurn, _wtTurnList: $._wtTurnList, _turnUnit: $._turnUnit
            }
            this.sysRef.update(send);
        }
    };
    /*
    //添付情報を送信
    OnlineManager.sendTempInfo = function () {
        if (this.tempRef && !this.syncBusy) {
            var send = $gameTemp;
            this.tempRef.update(send);
        }
    };
    */
    //プラグインコマンドで指定した情報とプレイヤー情報をオンライン上に送信
    OnlineManager.sendCustomInfo = function (key, value) {
        var info = this.playerInfo();
        info[key] = value;
        if (this.selfRef) this.selfRef.update(info);
    };

    //プレイヤー情報を削除
    OnlineManager.removePlayerInfo = function () {
        if (this.selfRef) this.selfRef.remove();
    };
    //ユニット情報を削除
    OnlineManager.removeUnitInfo = function () {
        if (this.unitRef) this.unitRef.remove();
    };
    //ユーザー情報を削除
    OnlineManager.removeUserInfo = function () {
        if (this.userRef) {
            this.userRef.remove();
            if ($gameSystem._allyTeamID == OnlineManager.user.uid) {
                $gameVariables.setValue(11, 0);
                $gameVariables.setValue(12, 0);
                $gameVariables.setValue(13, 0);
                $gameVariables.setValue(14, 0);
                $gameSwitches.setValue(17, false);
            } else if ($gameSystem._enemyTeamID == OnlineManager.user.uid) {
                $gameVariables.setValue(16, 0);
                $gameVariables.setValue(17, 0);
                $gameVariables.setValue(18, 0);
                $gameVariables.setValue(19, 0);
                $gameSwitches.setValue(18, false);
            }
        }
    };

    //$gameMapや$dataMapがnullでないことを保証
    OnlineManager.mapExists = function () {
        return DataManager.isMapLoaded();
    };

    //送られたデータが自分自身でなく、マップが読み込まれている時は表示
    OnlineManager.shouldDisplay = function (data) {
        return data.key !== this.user.uid && this.mapExists();
    };

    //スイッチが同期範囲内
    OnlineManager.switchInRange = function (switchId) {
        return this.parameters['syncSwitchStart'] <= switchId && switchId <= this.parameters['syncSwitchEnd'];
    };

    //変数が同期範囲内
    OnlineManager.variableInRange = function (variableId) {
        return this.parameters['syncVariableStart'] <= variableId && variableId <= this.parameters['syncVariableEnd'];
    };

    //スイッチを送信
    OnlineManager.sendSwitch = function (switchId, value) {
        if (this.switchRef && !this.syncBusy && this.switchInRange(switchId)) {
            var send = {};
            send[switchId] = value;
            this.switchRef.update(send);
        }
    };

    //変数を送信
    OnlineManager.sendVariable = function (variableId, value) {
        if (this.variableRef && !this.syncBusy && this.variableInRange(variableId)) {
            var send = {};
            send[variableId] = value;
            this.variableRef.update(send);
        }
    };

    //OnlineManagerを起動
    var _SceneManager_initialize = SceneManager.initialize;
    SceneManager.initialize = function () {
        _SceneManager_initialize.apply(this, arguments);
        OnlineManager.initialize();
    };

    //同じマップの時は$dataMapを読み込み直さない
    var _DataManager_loadMapData = DataManager.loadMapData;
    DataManager.loadMapData = function (mapId) {
        if ($gamePlayer.isTransferring() || SceneManager.isPreviousScene(Scene_Load)) {
            _DataManager_loadMapData.apply(this, arguments);
        }
    };

    //歩行時
    var _Game_Player_moveStraight = Game_Player.prototype.moveStraight;
    Game_Player.prototype.moveStraight = function (d) {
        var prevD = this.direction();
        _Game_Player_moveStraight.apply(this, arguments);
        //前回と位置か方向が違う時のみ送信する
        if (this.isMovementSucceeded() || d !== prevD) {
            OnlineManager.sendPlayerInfo();
        }
    };

    //グラフィック変更時
    var _Game_Player_setImage = Game_Player.prototype.setImage;
    Game_Player.prototype.setImage = function (characterName, characterIndex) {
        _Game_Player_setImage.apply(this, arguments);
        if (!this.isTransferring()) OnlineManager.sendPlayerInfo();	//場所移動した時は不要
    };

    //マップ切り替え時
    var _Game_Player_performTransfer = Game_Player.prototype.performTransfer;
    Game_Player.prototype.performTransfer = function () {
        if ($gameMap.mapId() === $gamePlayer.newMapId()) {
            for (var key in OnlineManager.avatarsInThisMap) OnlineManager.avatarsInThisMap[key].erase();
        }
        _Game_Player_performTransfer.apply(this, arguments);
        OnlineManager.connectNewMap();
    };

    //ロードした時はセーブ時点の残存アバターを消す
    //（Scene_Load.onLoadSuccessにフックすると$dataMapに触れないのでこのタイミング）
    var _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function () {
        _Scene_Map_start.apply(this, arguments);
        if (SceneManager.isPreviousScene(Scene_Load)) {
            $gameMap.events().forEach(function (event) { if (event instanceof Game_Avatar) event.erase(); });
            OnlineManager.connectNewMap();
        }
    };

    //タイトルに戻った時にもキャラ座標をリムーブ
    var _Scene_Title_start = Scene_Title.prototype.start;
    Scene_Title.prototype.start = function () {
        OnlineManager.removePlayerInfo();
        OnlineManager.removeUnitInfo();
        OnlineManager.removeUserInfo();
        _Scene_Title_start.apply(this, arguments);
    };

    //プラグインコマンド
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.apply(this, arguments);
        if (command.toLowerCase() === 'online') {
            switch (args[1].toLowerCase()) {
                case 'from':
                    var online = this.character(0).online;
                    $gameVariables.setValue(+args[0], online && online[args[2]]);
                    break;
                case 'to':
                    OnlineManager.sendCustomInfo(args[2], $gameVariables.value(+args[0]));
                    break;
                default:
                    break;
            }
        }
    };

    //スイッチ同期
    var _Game_Switches_setValue = Game_Switches.prototype.setValue;
    Game_Switches.prototype.setValue = function (switchId, value, byOnline) {
        _Game_Switches_setValue.call(this, switchId, value);
        if (!byOnline) OnlineManager.sendSwitch(switchId, this.value(switchId));
    };

    //変数同期
    var _Game_Variables_setValue = Game_Variables.prototype.setValue;
    Game_Variables.prototype.setValue = function (variableId, value, byOnline) {
        _Game_Variables_setValue.call(this, variableId, value);
        if (!byOnline) OnlineManager.sendVariable(variableId, this.value(variableId));
    };

    //スイッチ・変数の初期化時に、再同期処理（タイミングはスイッチが代表する）
    var _Game_Switches_initialize = Game_Switches.prototype.initialize;
    Game_Switches.prototype.initialize = function () {
        _Game_Switches_initialize.apply(this, arguments);
        OnlineManager.startSync();
    };
    /*
    //ユニット同期
    var _Scene_Map_endTurn = Scene_Map.prototype.endTurn;
    Scene_Map.prototype.endTurn = function () {
        _Scene_Map_endTurn.call(this);
        if ($gameSwitches.value(15)) {
            if ($gameSwitches.value(21) && $gameSystem._allyTeamID == OnlineManager.user.uid) {
                OnlineManager.sendUnitInfo();
                OnlineManager.sendSysInfo();
                $gameSwitches.setValue(21, false);
            } else if ($gameSwitches.value(22) && $gameSystem._enemyTeamID == OnlineManager.user.uid) {
                OnlineManager.sendUnitInfo();
                OnlineManager.sendSysInfo();
                $gameSwitches.setValue(22, false);
            } else {
                $gameSystem.syncVariable();
            }
            //OnlineManager.sendTempInfo();
        }
    };
    */

    //ユニット同期
    var _Scene_Map_startBattle = Scene_Map.prototype.startBattle;
    Scene_Map.prototype.startBattle = function () {
        _Scene_Map_startBattle.call(this);
        if ($gameSwitches.value(15)) {
            //$gameSystem.setSyncVariableTime();
            $gameSystem.sendWtTurnList();
        }
    };


    //オンライン経由でスイッチ・変数が変更された時、デバッグウィンドウ(F9)に反映
    //やや重い処理だが、F9はスマホやブラウザで実行されることはないためこれで大丈夫
    var _Window_DebugEdit_update = Window_DebugEdit.prototype.update;
    Window_DebugEdit.prototype.update = function () {
        _Window_DebugEdit_update.apply(this, arguments);
        this.refresh();
    };

    //Game_Avatar
    //アバターとして使用するマップイベントを定義
    Game_Avatar.prototype = Object.create(Game_Event.prototype);
    Game_Avatar.prototype.constructor = Game_Avatar;

    Game_Avatar.prototype.initialize = function (eventData, onlineData) {
        var mapId = $gameMap.mapId();
        var eventId = $gameMap.getEventIdSequence ? $gameMap.getEventIdSequence() : $gameMap._events.length;

        ['A', 'B', 'C', 'D'].forEach(function (switchId) {
            var key = [mapId, eventId, switchId];
            $gameSelfSwitches.setValue(key, false);
        });

        this.eventData = eventData;
        Game_Event.prototype.initialize.call(this, mapId, eventId);
        this.locate(onlineData.x, onlineData.y);
        this.setDirection(onlineData.direction);
        this.setMoveSpeed(onlineData.speed);
        this.setImage(onlineData.charaName, onlineData.charaIndex);
        this.setOnlineData(onlineData);
        $gameMap._events.push(this);

        var scene = SceneManager._scene;
        if (scene instanceof Scene_Map) {
            var sprite = new Sprite_Character(this);
            scene._spriteset._characterSprites.push(sprite);
            scene._spriteset._tilemap.addChild(sprite);
        }
    };

    Game_Avatar.prototype.event = function () {
        return this.eventData;
    };

    Game_Avatar.prototype.setOnlineData = function (onlineData) {
        this.online = onlineData;
    };

    //オンライン座標と同じ位置まで歩く（avatarTemplateのカスタムルートに設定されています）
    Game_Avatar.prototype.moveOnlineXy = function () {
        this.setMoveSpeed(this.online.speed);
        this.setImage(this.online.charaName, this.online.charaIndex);
        var distance = $gameMap.distance(this.x, this.y, this.online.x, this.online.y);
        if (distance === 0) {	//座標に到達しているなら方向転換のみ
            this.setDirection(this.online.direction);
        } else if (distance > 5) {	//座標まで５歩を超えて離れているならワープ
            this.locate(this.online.x, this.online.y);
            this.setDirection(this.online.direction);
        } else {	//座標まで１～５歩ならその座標へ歩く
            this.moveTowardCharacter(this.online);
        }
    };

    // SRPGバトラー設定（オンライン用）
    Game_System.prototype.setMatchingOnline = function () {
        OnlineManager.sysRef.once("value").then(function (data) {
            if (!$gameSwitches.value(17)) {
                $gameSystem._allyTeamID = OnlineManager.user.uid;
                $gameSystem._enemyTeamID = data.child("_enemyTeamID").val();
                $gameSwitches.setValue(17, true);
                OnlineManager.sendSysInfo();
            } else if (!$gameSwitches.value(18) && $gameSystem._allyTeamID != OnlineManager.user.uid) {
                $gameSystem._allyTeamID = data.child("_allyTeamID").val();
                $gameSystem._enemyTeamID = OnlineManager.user.uid;
                $gameSwitches.setValue(18, true);
                OnlineManager.sendSysInfo();
            }
            //if ($gameSwitches.value(17) && $gameSwitches.value(18)) $gameSystem.setBattlerOnline();
        });
    };
    //バトラーセット用
    Game_System.prototype.setBattlerOnline = function () {

        var id1;
        var id2;
        var id3;
        var id4;
        if ($gameSystem._allyTeamID == OnlineManager.user.uid) {
            id1 = 11;//ally1Id;
            id2 = 12;//ally2Id;
            id3 = 13;//ally3Id;
            id4 = 14;//ally4Id;
        } else if ($gameSystem._enemyTeamID == OnlineManager.user.uid) {
            id1 = 16;//enemy1Id;
            id2 = 17;//enemy2Id;
            id3 = 18;//enemy3Id;
            id4 = 19;//enemy4Id;
        } else {
            return;
        }

        for (var allyId = 0; allyId < this.allyMembers().length; allyId++) {
            //$gameMap.event(allyId).initTacticsUnitSetting();
            if (this.allyMembers()[parseInt(allyId)] <= 0) {
                var id = 0;
                do {
                    id = parseInt(Math.floor(Math.random() * (this.selectMembers().length - 2) + 1));
                } while (this.allyMembers().indexOf(id) >= 0);
                this.allyMembers()[parseInt(allyId)] = id;
            } else {
                id = this.allyMembers()[parseInt(allyId)];
            }
            switch (parseInt(allyId)) {
                case 0:
                    $gameVariables.setValue(id1, id); //変数設定
                    break;
                case 1:
                    $gameVariables.setValue(id2, id); //変数設定
                    break;
                case 2:
                    $gameVariables.setValue(id3, id); //変数設定
                    break;
                case 3:
                    $gameVariables.setValue(id4, id); //変数設定
                    break;
            }
        }
    };

    Scene_Map.prototype.updateOnline = function () {
        //敵のターン
        if ($gameSystem.isEnemyTurn()) {
            /*
            if ($gameSystem.turnUnit().isActor().checkHateState() || $gameSystem.turnUnit().isActor().checkHateGrantor() || $gameSystem.turnUnit().isActor().checkCtrlGrantor() || $gameSystem.turnUnit().isActor().checkNoCtrlState()) {
                if ($gameSystem._allyTeamID == OnlineManager.user.uid) this.updateAllyTurn();
                else this.updateSyncTurn();
            } else {
                if ($gameSystem._enemyTeamID == OnlineManager.user.uid) this.updateAllyTurn();
                else this.updateSyncTurn();
            }
            */
            if ($gameSystem._enemyTeamID == OnlineManager.user.uid) this.updateAllyTurn();
            else this.updateSyncTurn();
            return;
        }
        //味方のターン
        if ($gameSystem.isAllyTurn()) {
            /*
            if ($gameSystem.turnUnit().isActor().checkHateState() || $gameSystem.turnUnit().isActor().checkHateGrantor() || $gameSystem.turnUnit().isActor().checkCtrlGrantor() || $gameSystem.turnUnit().isActor().checkNoCtrlState()) {
                if ($gameSystem._enemyTeamID == OnlineManager.user.uid) this.updateAllyTurn();
                else this.updateSyncTurn();
            } else {
                if ($gameSystem._allyTeamID == OnlineManager.user.uid) this.updateAllyTurn();
                else this.updateSyncTurn();
            }
            */
            if ($gameSystem._allyTeamID == OnlineManager.user.uid) this.updateAllyTurn();
            else this.updateSyncTurn();
            return;
        }
    };

    //同期ターンの更新(呼び出されない不具合あり)
    Scene_Map.prototype.updateSyncTurn = function () {
        var turnUnit = $gameSystem.turnUnit();
        switch ($gameSystem._phaseState) {
            case 0: //カメラ移動完了後コマンド表示
                $gameMap.initColorArea();
                $gameMap.setMovableArea(turnUnit);
                //カメラが移動中かどうか
                if ($gamePlayer.isStopping() && $gameTemp._cameraWait) {
                    //対象ターン行動フラグ
                    $gameTemp._cameraWait = false;
                    this.openBattleStatusWindow(turnUnit); //自身のステータスを表示
                    //ターン開始前処理(リジェネ回復など)
                    $gameSystem._phaseState = 1;
                }
                break;
            case 1: //ターン開始前処理(アニメーションを取り扱う)
                //ターン開始前の処理
                $gameSystem.startTurn(turnUnit);
                turnUnit.beforeTurnStart();

                //元の座標を記憶
                turnUnit.setFromXy(turnUnit.x, turnUnit.y, turnUnit.direction());
                $gameMap.setInvisibleArea($gameSystem.unitList());
                $gameMap.showInvisibleArea(turnUnit);
                $gameSystem._phaseState = 2;
                break;
            case 2: //試行錯誤
                //クラス設定されたタグに合わせてターゲットを変更する
                if (!turnUnit.isActor().canMove()) {
                    //$gameMessage.add("行動不能");
                    SoundManager.playBuzzer();//ブザー
                    //$gameMessage.clear(); //行動不能などのメッセージを消去したい
                    $gameSystem._phaseState = 11; //麻痺とかであれば以降の処理は行わず次のターンへ
                    return;
                }
                $gameSystem.syncVariable(); //phaseStateの同期
                //この時点でコマンドもセットする
                //$gameSystem._phaseState = 3; //状況によっては5に移行
                if ($gameSwitches.value(23)) {
                    $gameSystem._phaseState = 3; //状況によっては5に移行
                    $gameSwitches.setValue(23, false);
                }
                //if ($gameSwitches.value(24) && $gameSwitches.value(20)) {
                if ($gameSwitches.value(24)) {
                    if(!turnUnit.useSkill()) return;
                    $gameSystem._phaseState = 5; //状況によっては5に移行
                    $gameSwitches.setValue(24, false);
                }
                if ($gameSwitches.value(25)) {
                    this.commandWait();
                    $gameSwitches.setValue(25, false);
                }
                break;
            case 3: //移動先選択
                //移動タイルを表示し
                $gameMap.setMovableArea(turnUnit);
                $gameMap.showMovableArea(turnUnit);
                $gamePlayer.setCameraXy(turnUnit.toX(), turnUnit.toY());
                $gameSystem._phaseState = 4;
                break;
            case 4: //移動処理(移動完了したらphaseStateを上げる)
                //移動処理
                if (turnUnit.pos(turnUnit.toX(), turnUnit.toY())) {
                    $gameMap.initColorArea();
                    turnUnit.endMove();
                    $gameSystem._phaseState = 2; //一旦phase2へ戻る
                } else {
                    this.updateMove();//指定座標へ移動する処理
                }
                break;
            case 5: //対象選択
                $gameMap.showRangeArea(turnUnit, null);
                $gameSystem._phaseState = 6;//範囲確認へ移行
                break;
            case 6: //範囲確認
                if (!this.isSelectWaitingMode()) return;//待ち時間
                this.targetBattleStatusWindow(turnUnit.useSkill(), turnUnit.target());//ターゲットを表示
                $gameMap.showEffectArea(turnUnit);//効果範囲表示
                $gamePlayer.setCameraEvent(turnUnit.target()); //カメラを選択した対象へ回す
                $gameSystem._phaseState = 7;//対象アニメーションフェーズへ移行
                break;
            case 7: //コマンド実行処理(詠唱アニメーション)
                if (!this.isYesNoWaitingMode()) return;//待ち時間
                //移動しながら攻撃の場合
                if ($gameTemp._moveTargetPointFlag) {
                    var xPlus = $gameTemp._moveTargetPointX - turnUnit.x;
                    var yPlus = $gameTemp._moveTargetPointY - turnUnit.y;
                    turnUnit.jump(xPlus, yPlus); //移動しながらの攻撃はジャンプで行う
                }
                //蘇生の場合
                if ($gameTemp._resurrectionFlag) {
                    $gameTemp.isResurrectionUnit().resurrectionUnit();
                }
                //自身に攻撃アニメーション
                this.showActionMotion(turnUnit);
                //this.showActionAnimation(turnUnit);
                $gameSystem._phaseState = 8;//対象アニメーションフェーズへ移行
                break;
            case 8: //コマンド実行処理(詠唱アニメーション)
                if ($gameTemp._attackTime == false) {
                    turnUnit.setBattlerReturn();
                    $gameSystem._phaseState = 9;
                }
                break;
            case 9: //コマンド実行処理(対象アニメーション)
                turnUnit.setBattlerReturn();
                turnUnit.target().showActionAnimation(turnUnit, turnUnit.useSkill());  // 行動アニメーションの表示
                //多段ヒット時の設定
                $gameTemp.setMultiHit(turnUnit.useSkill());
                $gameSystem._phaseState = 10;//ダメージ表示フェーズへ移行
                break;
            case 10: //コマンド実行処理(ダメージ表示)
                if (!this.isMultiHitPopWaitingMode()) return;//待ち時間
                turnUnit.executeAction();
                $gameTemp.countMultiHit();
                if (!$gameTemp.endMultiHit()) return;//ヒットが終わってない場合やり直し
                this.updateBattleStatusWindow();//戦闘用ステータスウインドウを更新
                $gameMap.initColorArea();
                $gameSystem._phaseState = 11;//ターン終了後処理へ移行
                break;
            case 11: //ターン終了後処理(アニメーションを取り扱う)
                //ターン終了後の処理
                turnUnit.afterTurnEnd();
                $gameSystem._phaseState = 12;//事後処理
                break;
            case 12: //事後処理
                this.endTurn(); //
                //$gameSystem.syncVariable(); //phaseStateの同期(ここで行うと色々と不具合が怒るためコメントアウト)
                break;
            case 13: //ユニットリスト選択フェーズ
                this.updateUnitListWindow();
                break;
            case 14: //蘇生ユニット選択フェーズ
                this.updateDeadUnitListWindow();
                break;
            case 15: //ステート確認フェーズ
                this.updateBattleStatusWindow();
                break;
        }
    };
    //行動順調整用スクリプトの同期
    Game_System.prototype.sendWtTurnList = function () {
        //if (this._allyTeamID == OnlineManager.user.uid && $gameSwitches.value(19)) {
        if (!$gameSwitches.value(19)) {
            OnlineManager.sendUnitInfo();
            OnlineManager.sendSysInfo();
            $gameSwitches.setValue(19, true);
        } else {
            this.syncVariable();
            $gameSwitches.setValue(19, false);
        }
        //this.receiveWtTurnList();
    };
    //同期用
    Game_System.prototype.syncVariable = function (eventId) {
        OnlineManager.unitRef.once("value").then(function (data) {
            //ユニット更新用、行動順更新用などで分けた方が良い
            for (var i = 0; i < $gameSystem.unitList().length; i++) {
                if (eventId && eventId != $gameSystem.unitList()[i].event().id) continue;
                var unit = $gameSystem.unitList()[i];
                $gameSystem.unitList()[i]._target = data.child(i).child("target").val();
                $gameSystem.unitList()[i]._useSkill = data.child(i).child("useSkill").val();
                $gameSystem.unitList()[i].isActor()._hp = data.child(i).child("hp").val();
                $gameSystem.unitList()[i].isActor()._mp = data.child(i).child("mp").val();
                $gameSystem.unitList()[i].isActor()._tp = data.child(i).child("tp").val();
                $gameSystem.unitList()[i].isActor()._wt = data.child(i).child("wt").val();
                $gameSystem.unitList()[i].setToXy(data.child(i).child("toX").val(), data.child(i).child("toY").val());
                //unit.isActor()._states = data.child(i).child("states").val();
                //unit.isActor()._stateTurns = data.child(i).child("stateTurns").val();
            }
        });

        OnlineManager.sysRef.once("value").then(function (data) {
            //ユニット更新用、行動順更新用などで分けた方が良い
            //$gameSystem = data.val();
            $gameSystem._allyTeamID = data.child("_allyTeamID").val();
            $gameSystem._enemyTeamID = data.child("_enemyTeamID").val();
            //$gameSystem._isAllyTurn = data.child("_isAllyTurn").val();
            //$gameSystem._isEnemyTurn = data.child("_isEnemyTurn").val();
            $gameSystem._turnUnit = data.child("_turnUnit").val();
            $gameSystem._wtTurnList = data.child("_wtTurnList").val();
        });

    };
    //ヒットしたかを引き出す
    Game_System.prototype.syncIsHitVariable = function (eventId) {
        OnlineManager.unitRef.once("value").then(function (data) {
            for (var i = 0; i < $gameSystem.unitList().length; i++) {
                if (eventId != $gameSystem.unitList()[i].event().id) continue;
                //ユニット更新用、行動順更新用などで分けた方が良い
                var unit = $gameSystem.unitList()[i];
                var result = unit.isActor().result();
                if (result) {
                    result.missed = data.child(i).child("missed").val();
                    result.evaded = data.child(i).child("evaded").val();
                }
                return;
            }
        });
    };

    //受けたダメージを引き出す
    Game_System.prototype.syncDamageVariable = function (eventId) {
        OnlineManager.unitRef.once("value").then(function (data) {
            for (var i = 0; i < $gameSystem.unitList().length; i++) {
                if (eventId != $gameSystem.unitList()[i].event().id) continue;
                //ユニット更新用、行動順更新用などで分けた方が良い
                var unit = $gameSystem.unitList()[i];
                var result = unit.isActor().result();
                if (result) {
                    result.critical = data.child(i).child("critical").val();
                    result.hpDamage = data.child(i).child("hpDamage").val();
                }
                return;
            }
        });
    };
    //WTリスト設定中か
    Game_System.prototype.isSyncVariableTime = function () {
        if ($gameSwitches.value(19)) return true;
        else return false;
    };
    Game_System.prototype.sendInfo = function (eventId = null) {
        OnlineManager.sendUnitInfo(eventId);
        OnlineManager.sendSysInfo();
    };
    //同期中のターンか
    Game_System.prototype.isSyncTurn = function () {
        if ($gameSystem.isEnemyTurn()) {
            if ($gameSystem._enemyTeamID == OnlineManager.user.uid) return false;
            else return true;
        } else if ($gameSystem.isAllyTurn()) {
            if ($gameSystem._allyTeamID == OnlineManager.user.uid) return false;
            else return true;
        }
    };
})();