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
    OnlineManager.roomRef = null;
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

        if (this.userRef) this.userRef.off();
        else this.userRef = firebase.database().ref('users');

        this.selfRef = this.userRef.child(this.user.uid); //配列にpushする感じで宣言したい
        this.selfRef.onDisconnect().remove();	//切断時にキャラ座標をリムーブ

        /*
        this.userRef.on('child_added', function (data) {
            OnlineManager.sendUserInfo();
        });
        */
        //ユーザーが退場
        this.userRef.on('child_removed', function (data) {
            OnlineManager.removeUserInfo();
        });

        //接続が最初のマップ読み込みよりも遅延した時は、今いるマップのオンラインデータを購読
        if (this.mapExists()) this.connectNewMap();

        if ($gameSwitches) this.startSync();
    };

    //スイッチと変数のオンライン同期の開始
    OnlineManager.startSync = function () {
        if (!this.user || $gameVariables.value(8) == 0) return;
        var roomId = 'room' + $gameVariables.value(8);

        if (this.parameters['syncSwitchStart'] || this.parameters['syncSwitchEnd']) {
            var switchColumn = roomId + '/switches';
            if (this.switchRef) this.switchRef.off();
            else {
                this.switchRef = firebase.database().ref(switchColumn);
                this.switchRef.onDisconnect().remove();	//切断時にリムーブ
            }
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
            var variablesColumn = roomId + '/variables';
            if (this.variableRef) this.variableRef.off();
            else {
                this.variableRef = firebase.database().ref(variablesColumn);
                this.variableRef.onDisconnect().remove();	//切断時にリムーブ
            }
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
        var sysColumn = roomId + '/system';
        if (this.sysRef) this.sysRef.off();
        else {
            this.sysRef = firebase.database().ref(sysColumn);
            this.sysRef.onDisconnect().remove();	//切断時にリムーブ
        }
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
        var unitColumn = roomId + '/units';
        if (this.unitRef) this.unitRef.off();
        else {
            this.unitRef = firebase.database().ref(unitColumn);
            this.unitRef.onDisconnect().remove();	//切断時にリムーブ
        }
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


        //他プレイヤーが同マップに入場(gameSystem._allyTeamIDに直接割り振った方がいい？、プレイヤー自体をマップから独立させて)
        this.mapRef.on('child_added', function (data) {
            //avatarsInThisMap[data.key] = new Game_Avatar(avatarTemplate, data.val());
        });
    };

    //プレイヤー情報をオンライン上に送信
    OnlineManager.sendUserInfo = function () {
        if (this.selfRef) {
            var send = {};
            send = { unit: $gameSystem.allyMembers(), room: $gameVariables.value(8) };
            this.selfRef.update(send);
        }
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
                    toX: $.toX(), toY: $.toY(), target: $._target, useSkill: $._useSkill, wt: $.isActor()._wt, states: $.isActor()._states, stateTurns: $.isActor()._stateTurns, stateGrantors: $.isActor()._stateGrantors
                };
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
                allyTeamID: $._allyTeamID, enemyTeamID: $._enemyTeamID, isAllyTurn: $._isAllyTurn, isEnemyTurn: $._isEnemyTurn, wtTurnList: $._wtTurnList, turnUnit: $._turnUnit, quickTurnUnit: $._quickTurnUnit
                , moveTargetPointFlag: $._moveTargetPointFlag, moveTargetPointX: $._moveTargetPointX, moveTargetPointY: $._moveTargetPointY, resurrectionFlag: $._resurrectionFlag, resurrectionUnit: $._resurrectionUnit
            }
            this.sysRef.update(send);
        }
    };
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

    //ルーム画面
    function Window_RoomSelect() {
        this.initialize.apply(this, arguments);
    }
    Window_RoomSelect.prototype = Object.create(Window_Selectable.prototype);
    Window_RoomSelect.prototype.constructor = Window_RoomSelect;

    Window_RoomSelect.prototype.initialize = function () {
        var w = Graphics.boxWidth, h = Graphics.boxHeight,
            a = eval("[0, 96, w, h - 96]");
        Window_Selectable.prototype.initialize.call(this, a[0], a[1], a[2], a[3]);
        this.refresh();
    }

    Window_RoomSelect.prototype.maxItems = function () {
        return 6; //ルームの最大数(後にグローバル変数から指定予定)
    };
    Window_RoomSelect.prototype.maxCols = function () {
        return 2;
    };

    Window_RoomSelect.prototype.drawItem = function (index) {
        var rect = this.itemRect(index);
        var roomId = index + 1;
        this.contents.drawText("ルーム" + roomId, rect.x, rect.y + 8, 96, 32, "left");
        var window = this;
        //データベースから検索したい
        OnlineManager.userRef.on("value", (data) => {
            if (data) {
                const rootList = data.val();
                const key = data.key;
                let list = [];
                // データオブジェクトを配列に変更する
                if (rootList != null) {
                    Object.keys(rootList).forEach((val, key) => {
                        rootList[val].id = val;
                        list.push(rootList[val]);
                    })
                }
                //以下、部屋からUIDを引き出す
                var roomRefId = 'room' + roomId + '/system';
                OnlineManager.roomRef = firebase.database().ref(roomRefId);
                OnlineManager.roomRef.once("value").then(function (data2) {
                    var allyTeamID = data2.child("allyTeamID").val();
                    var enemyTeamID = data2.child("enemyTeamID").val();
                    for (var i = 0; i < list.length; i++) {
                        if (parseInt(list[i].room) == roomId) {
                            for (var j = 0; j < list[i].unit.length; j++) {
                                var unitId = list[i].unit[j];
                                if (unitId > 0) {
                                    var actor = $gameActors.actor(unitId);
                                    //ルームID内のカラムを引っ張りたい
                                    if (list[i].id == allyTeamID && j < 4) {
                                        window.drawActorCharacter(actor, rect.x + 24 + 32 * j, rect.y + rect.height / 2, rect.width, rect.height / 2);
                                    } else if (list[i].id == enemyTeamID && j >= 4) {
                                        window.drawActorCharacter(actor, rect.x + 24 + 32 * (j + 5), rect.y + rect.height / 2, rect.width, rect.height / 2);
                                    }
                                } else {
                                    if (list[i].id == allyTeamID && j < 4) {
                                        window.contents.drawText("ラ", rect.x + 24 + 32 * j, rect.y + rect.height / 2, 32, rect.height / 2);
                                    } else if (list[i].id == enemyTeamID && j >= 4) {
                                        window.contents.drawText("ラ", rect.x + 24 + 32 * j, rect.y + rect.height / 2, 32, rect.height / 2);
                                    }
                                }
                            }
                        }
                    }
                    //対戦中、待機中、空きの3種に分けたい
                    if (allyTeamID && enemyTeamID) {
                        window.changeTextColor('red');
                        window.contents.drawText("対戦中", rect.x + 128, rect.y + 8, rect.width, 32);
                    } else if (allyTeamID || enemyTeamID) {
                        window.changeTextColor('orange');
                        window.contents.drawText("待機中", rect.x + 128, rect.y + 8, rect.width, 32);
                    } else {
                        window.resetTextColor();
                        window.contents.drawText("空き", rect.x + 128, rect.y + 8, rect.width, 32);
                    }
                });
            }
        });
    };

    Window_RoomSelect.prototype.drawCharacter = function (characterName, characterIndex, x, y) {
        var bitmap = ImageManager.loadCharacter(characterName);
        var big = ImageManager.isBigCharacter(characterName);
        var pw = bitmap.width / (big ? 3 : 12);
        var ph = bitmap.height / (big ? 4 : 8);
        var n = characterIndex;
        var sx = (n % 4 * 3 + 1) * pw;
        var sy = (Math.floor(n / 4) * 4) * ph + 8;//param.wwRowTop;
        this.contents.blt(bitmap, sx, sy, pw, this.itemHeight() / 2, x - pw / 2, y);
    };

    Window_RoomSelect.prototype.lineHeight = function () {
        return 128; //param.wwRowHeight;
    };

    // Scene_RoomSelect

    function Scene_RoomSelect() {
        return this.initialize.apply(this, arguments);
    };

    Scene_RoomSelect.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_RoomSelect.prototype.constructor = Scene_RoomSelect;

    Scene_RoomSelect.prototype.create = function () {
        Scene_MenuBase.prototype.create.call(this);
        //ssBitmap = null;
        OnlineManager.sendUserInfo();
        this.createRoomSelectWindow();
    };

    Scene_RoomSelect.prototype.createRoomSelectWindow = function () {
        this.createRoomSelectWindow = new Window_RoomSelect();
        this.createRoomSelectWindow.setHandler('ok', this.commandOkRoomSelect.bind(this));
        this.createRoomSelectWindow.setHandler('cancel', this.commandCancelRoomSelect.bind(this));
        this.createRoomSelectWindow.activate();
        this.addWindow(this.createRoomSelectWindow);
    };

    Scene_RoomSelect.prototype.commandOkRoomSelect = function () {
        var roomId = this.createRoomSelectWindow._index + 1;
        //以下、部屋からUIDを引き出す
        var roomRefId = 'room' + roomId + '/system';
        var scene = this;
        OnlineManager.roomRef = firebase.database().ref(roomRefId);
        OnlineManager.roomRef.once("value").then(function (data) {
            var allyTeamID = data.child("allyTeamID").val();
            var enemyTeamID = data.child("enemyTeamID").val();
            //対戦中、待機中、空きの3種に分けたい
            if (allyTeamID && enemyTeamID) {
                //以下の処理を行うとストップしてしまう
                SoundManager.playBuzzer();//ブザー
                scene.createRoomSelectWindow.activate();
            } else {
                $gameVariables.setValue(8, roomId);
                $gameSwitches.setValue(12, false); //エリア選択スイッチOFF(スイッチNoはいずれプラグインの変数設定から行えるようにする)
                $gameSwitches.setValue(16, true); //マッチングスイッチOFF(スイッチNoはいずれプラグインの変数設定から行えるようにする)
                OnlineManager.startSync(); //ここで同期すると待機メンバーのスイッチ変数を上書きしてしまうのでは？
                OnlineManager.sendUserInfo();
                $gamePlayer.refresh();
                scene.popScene();
            }
        });

    };

    Scene_RoomSelect.prototype.commandCancelRoomSelect = function () {
        $gameVariables.setValue(8, 0);
        $gameSwitches.setValue(12, false); //エリア選択スイッチOFF(スイッチNoはいずれプラグインの変数設定から行えるようにする)
        $gameSwitches.setValue(11, true); //キャラクター選択スイッチON(スイッチNoはいずれプラグインの変数設定から行えるようにする)
        $gamePlayer.refresh();
        this.popScene();
    };
    /*
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
    */

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

        if (command === 'roomSelect') {
            switch (args[0]) {
                case 'start':
                    //ssBitmap = Bitmap.snap(SceneManager._scene);
                    SceneManager.push(Scene_RoomSelect);
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


    //オンライン経由でスイッチ・変数が変更された時、デバッグウィンドウ(F9)に反映
    //やや重い処理だが、F9はスマホやブラウザで実行されることはないためこれで大丈夫
    var _Window_DebugEdit_update = Window_DebugEdit.prototype.update;
    Window_DebugEdit.prototype.update = function () {
        _Window_DebugEdit_update.apply(this, arguments);
        this.refresh();
    };
    // SRPGバトラー設定（オンライン用）
    Game_System.prototype.setMatchingOnline = function () {
        OnlineManager.sysRef.once("value").then(function (data) {
            if (!$gameSwitches.value(17) && $gameSystem._allyTeamID == "") {
                $gameSystem._allyTeamID = OnlineManager.user.uid;
                $gameSystem._enemyTeamID = data.child("enemyTeamID").val();
                $gameSwitches.setValue(17, true);
                OnlineManager.sendSysInfo();
            } else if (!$gameSwitches.value(18) && !$gameSystem.isAllyTeam()) {
                $gameSystem._allyTeamID = data.child("allyTeamID").val();
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
        if ($gameSystem.isAllyTeam()) {
            id1 = 11;//ally1Id;
            id2 = 12;//ally2Id;
            id3 = 13;//ally3Id;
            id4 = 14;//ally4Id;
        } else if ($gameSystem.isEnemyTeam()) {
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

    //同期ターンの更新(呼び出されない不具合あり)
    Scene_Map.prototype.updateSyncTurn = function () {
        var turnUnit = $gameSystem.turnUnit();
        switch ($gameSystem._phaseState) {
            case 0: //カメラ移動完了後コマンド表示
                if ($gameSwitches.value(20)) return; //ここに書くと詰む予感
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
                if (!$gameSwitches.value(27)) $gameSystem.syncVariable(); //phaseStateの同期(戦闘不能者が出た場合エラー回避のため変数で条件分岐)
                //この時点でコマンドもセットする
                //$gameSystem._phaseState = 3; //状況によっては5に移行
                if ($gameSwitches.value(23)) {
                    $gameSystem._phaseState = 3; //状況によっては5に移行
                    $gameSwitches.setValue(23, false);
                }
                //コマンダーの行動終わってからアクションなのでテンポは悪い
                if ($gameSwitches.value(24) && $gameSwitches.value(28)) {
                    if (!turnUnit.useSkill()) return;
                    $gameSystem._phaseState = 5; //状況によっては5に移行
                    $gameSwitches.setValue(24, false);
                }
                if ($gameSwitches.value(25)) {
                    this.commandWait();
                    $gameSwitches.setValue(25, false);
                    $gameSwitches.setValue(28, false);
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
                if ($gameSystem._moveTargetPointFlag) {
                    var xPlus = $gameSystem._moveTargetPointX - turnUnit.x;
                    var yPlus = $gameSystem._moveTargetPointY - turnUnit.y;
                    turnUnit.jump(xPlus, yPlus); //移動しながらの攻撃はジャンプで行う
                }
                //蘇生の場合
                if ($gameSystem._resurrectionFlag) {
                    $gameSystem.isResurrectionUnit().resurrectionUnit();
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
                if ($gameSwitches.value(20)) {
                    //ターン終了後の処理
                    turnUnit.afterTurnEnd();
                    $gameSystem._phaseState = 12;//事後処理
                }
                break;
            case 12: //事後処理
                if ($gameSwitches.value(20)) {
                    $gameSwitches.setValue(20, false);
                    this.endTurn();
                }
                $gameSystem.syncVariable();
                break;
        }
    };
    //同期用(ユーザー情報を引っ張りたい)
    Game_System.prototype.countUser = function () {
        OnlineManager.userRef.once("value").then(function (data) {
            var i = 0;
            while (data.child(i)) {
                i++;
            }
            return i + 1;
        });
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
                $gameSystem.unitList()[i].setToXy(data.child(i).child("toX").val(), data.child(i).child("toY").val());
            }
        });

        OnlineManager.sysRef.once("value").then(function (data) {
            //ユニット更新用、行動順更新用などで分けた方が良い
            //$gameSystem = data.val();
            $gameSystem._allyTeamID = data.child("allyTeamID").val();
            $gameSystem._enemyTeamID = data.child("enemyTeamID").val();
            $gameSystem._quickTurnUnit = data.child("quickTurnUnit").val();
            $gameSystem._moveTargetPointFlag = data.child("moveTargetPointFlag").val();
            $gameSystem._moveTargetPointX = data.child("moveTargetPointX").val();
            $gameSystem._moveTargetPointY = data.child("moveTargetPointY").val();
            $gameSystem._resurrectionFlag = data.child("resurrectionFlag").val();
            $gameSystem._resurrectionUnit = data.child("resurrectionUnit").val();
            if (!$gameSystem._resurrectionUnit) $gameSystem._resurrectionUnit = [];
        });

    };
    //同期用
    Game_System.prototype.syncState = function (eventId) {
        OnlineManager.unitRef.once("value").then(function (data) {
            //ユニット更新用、行動順更新用などで分けた方が良い
            for (var i = 0; i < $gameSystem.unitList().length; i++) {
                if (eventId && eventId != $gameSystem.unitList()[i].event().id) continue;
                var unit = $gameSystem.unitList()[i];
                unit.isActor()._states = data.child(i).child("states").val(); //反映はされているが同期する側（受け手）の効果が適用される
                unit.isActor()._stateTurns = data.child(i).child("stateTurns").val();
                unit.isActor()._stateGrantors = data.child(i).child("stateGrantors").val();
                //unit.isActor()._selfState = data.child(i).child("selfState").val();
                if (!unit.isActor()._states) unit.isActor().clearStates();
            }
        });
    };
    //同期用
    Game_System.prototype.syncWtList = function () {
        OnlineManager.sysRef.once("value").then(function (data) {
            //ユニット更新用、行動順更新用などで分けた方が良い
            $gameSystem._turnUnit = data.child("turnUnit").val();
            $gameSystem._wtTurnList = data.child("wtTurnList").val();
        });

        OnlineManager.unitRef.once("value").then(function (data) {
            for (var i = 0; i < $gameSystem.unitList().length; i++) {
                $gameSystem.unitList()[i].isActor()._wt = data.child(i).child("wt").val();
            }
        });
    };

    Game_System.prototype.sendInfo = function (eventId = null) {
        OnlineManager.sendUnitInfo(eventId);
        OnlineManager.sendSysInfo();
    };
    //同期中のターンか
    Game_System.prototype.isSyncTurn = function (unit = null) {
        if (this.isEnemyTurn()) {
            if (this.isEnemyTeam()) return false;
            else return true;
        } else if (this.isAllyTurn()) {
            if (this.isAllyTeam()) return false;
            else return true;
        } else if ($gameTemp.isReservationAction() && unit) {
            if ((unit.isAlly() && this.isAllyTeam()) || (unit.isEnemy() && this.isEnemyTeam())) return false;
            else return true;
        } else {
            return false;
        }
    };
    //味方ターンか
    Game_System.prototype.isAllyTeam = function () {
        if (this._allyTeamID == OnlineManager.user.uid) return true;
        else return false;
    };
    //敵ターンか
    Game_System.prototype.isEnemyTeam = function () {
        if (this._enemyTeamID == OnlineManager.user.uid) return true;
        else return false;
    };
})();