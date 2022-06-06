//敵味方配置パラメータ設定(イベント経由)
//メタデータ
//生成用SRPG味方ユニット
//<Actor:0>
//生成用SRPG敵ユニット
//<Enemy:0>
/*:
 * @plugindesc DISSIDIA TACTICS FANTASY専用のゲームシステム
 *
 * @author サボテンマン (ベースは「tomoaky」様)
 *
 * @param damagePopupInterval
 * @desc 連続ダメージポップアップの間隔（フレーム）
 * 初期値: 30
 * @default 30
 *
 * @param checkSkillId
 * @desc 調べる/話すスキルの番号
 * 初期値: 0
 * @default 0
 *
 * @param useUnitHpGauge
 * @desc ユニットHPゲージを利用するかどうか
 * 初期値: 1 ( 0 = 無効 / 1 = 有効)
 * @default 1
 *
 * @param useUnitStateIcon
 * @desc ユニットステートアイコンを利用するかどうか
 * 初期値: 1 ( 0 = 無効 / 1 = 有効)
 * @default 1
 *
 * @param useUnitID
 * @desc ユニットIDを利用するかどうか
 * 初期値: 1 ( 0 = 無効 / 1 = 有効)
 * @default 1
 *
 * @param colorAreaMove
 * @desc 移動可能範囲のタイルトナー設定
 * 初期値: 0 0 255 125
 * @default 0 0 255 125
 *
 * @param colorAreaWaiting
 * @desc 待機時の方向
 * 初期値: 255 255 255 125
 * @default 255 255 255 125
 *
 * @param colorAreaTargetAlly
 * @desc 補助系スキルのタイルトナー設定
 * 初期値: 0 255 0 125
 * @default 0 255 0 125
 *
 * @param colorAreaTargetEnemy
 * @desc 攻撃系スキルのタイルトナー設定
 * 初期値: 255 0 0 125
 * @default 255 0 0 125
 *
 * @param colorAreaTurnUnit
 * @desc ターンが回ったユニットのタイルトナー設定
 * 初期値: 255 255 32 128
 * @default 255 255 32 128
 *
 * @param colorAreaInvisible
 * @desc バフフィールドのトナー設定
 * 初期値: 255 255 255 128
 * @default 255 255 255 128
 *
 * @param colorAreaInvisibleCover
 * @desc バフフィールド(被り)のトナー設定
 * 初期値: 0 0 0 128
 * @default 0 0 0 128
 *
 * @param backAttackPhysical
 * @desc 物理による背後攻撃倍率
 * 初期値: 1.5
 * @default 1.5
 *
 * @param backAttackMagical
 * @desc 魔法による背後攻撃倍率
 * 初期値: 1.5
 * @default 1.5
 *
 * @param reflectAnimationId
 * @desc 魔法反射時に再生するアニメーションの番号
 * 初期値: 0
 * @default 0
 * @require 1
 * @type animation
 * 
 * @param commandX
 * @desc コマンドウィンドウの表示位置（Ｘ座標）
 * 初期値: 0
 * @default 0
 *
 * @param commandY
 * @desc コマンドウィンドウの表示位置（Ｙ座標）
 * 初期値: 0
 * @default 0
 *
 * @param commandLineHeight
 * @desc コマンドウィンドウの１行の高さ
 * 初期値: 36
 * @default 36
 *
 * @param statusBackground
 * @desc ステータスウィンドウの背景タイプ
 * 初期値: 1（ 0 = ウィンドウ / 1 = 暗くする / 2 = 透明）
 * @default 1
 *
 * @param statusNameWidth
 * @desc ステータスウィンドウのユニット名の幅
 * 初期値: 144
 * @default 144
 *
 * @param statusHpWidth
 * @desc ステータスウィンドウのＨＰゲージの幅（ＭＰでも利用）
 * 初期値: 186
 * @default 186
 *
 * @param statusFaceMirror
 * @desc ステータスウィンドウの顔グラフィック左右反転設定
 * 初期値: left（ left = 左側を反転 / right = 右側を反転）
 * @default left
 *
 * @param unitListWidth
 * @desc ユニットリストウィンドウの幅
 * 初期値: 240
 * @default 240
 *
 * @param unitListRows
 * @desc ユニットリストウィンドウの表示行数
 * 初期値: 7
 * @default 7
 *
 * @param helpWindowLine
 * @desc ヘルプウインドウの行数
 * 初期値: 4
 * @default 4
 *
 * @param infoSize
 * @desc マップ情報ウィンドウの大きさ
 * 初期値: 480*480
 * @default 480*480
 *
 * @param statusArrowImage
 * @desc ステータスウィンドウの矢印画像のファイル名
 * 初期値: statusArrow
 * @default statusArrow
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param moveWaitingTime 
 * @desc 移動待ち時間
 * 初期値: 10
 * @default 10
 *
 * @param selectWaitingTime 
 * @desc 対象選択待ち時間
 * 初期値: 10
 * @default 10
 *
 * @param yesNoWaitingTime 
 * @desc YesNo待ち時間
 * 初期値: 60
 * @default 60
 *
 * @param endBattleTime 
 * @desc 戦闘終了処理時間
 * 初期値: 180
 * @default 180
 *
 * @param multiHitPopTime 
 * @desc 多段ヒットポップ表示間隔
 * 初期値: 10
 * @default 10
 *
 * @param stateMax 
 * @desc ステート上限値
 * 初期値: 4
 * @default 4
 *
 * @param stateIconWidth 
 * @desc バフフレーム表示の間隔
 * 初期値: 16
 * @default 16
 *
 * @param wtTurnListMax 
 * @desc 行動順リストに載せる最大ユニット数
 * 初期値: 10
 * @default 10
 *
 * @param isDyingHp 
 * @desc 瀕死HPのライン(割合)
 * 初期値: 10
 * @default 10
 *
 * @param CriticalColor
 * @desc クリティカル発生時の文字のフラッシュ色です。R(赤),G(緑),B(青),A(強さ)の順番でカンマ(,)区切りで指定。
 * @default 255 0 0 255
 *
 * @param MissColor
 * @desc ミス発生時の文字のフラッシュ色です。
 * @default 0 0 0 0
 *
 * @param WeakColor
 * @desc 弱点発生時の文字のフラッシュ色です。
 * @default 0 255 128 255
 *
 * @param WeakLine
 * @desc この値以上なら弱点と見なします。百分率で指定します。
 * @default 200
 *
 * @param ResistColor
 * @desc 耐性発生時の文字のフラッシュ色です。
 * @default 0 0 128 255
 *
 * @param ResistLine
 * @desc この値以下なら耐性と見なします。百分率で指定します。
 * @default 50
 *
 * @param paramFlashDuration
 * @desc フラッシュカラーがフェードアウトするまでのフレーム数です。
 * @default 60
 *
 * @param FontSize
 * @desc ポップアップのフォントサイズです。
 * @default 16
 *
 * @param MaxWidth
 * @desc ポップアップメッセージの最大幅です。
 * @default 240
 *
 * @param UsingItalic
 * @desc ポップアップがイタリック体で表示されます。
 * @default false
 * @type boolean
 *
 * @param UsingOutline
 * @desc ポップアップが縁取り表示されます。
 * @default false
 * @type boolean
 *
 * @param CriticalDamage
 * @desc クリティカルダメージの倍率
 * @default 2
 *
 * @param MaxElementDamage
 * @desc 属性攻撃による倍率上限
 * @default 200
 *
 * @param cursorImage
 * @desc SRPGカーソルのファイル名
 * 初期値: !$Cursor
 * @default !$Cursor
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param ally1Id
 * @desc 味方1の変数
 * @default 11
 *
 * @param ally2Id
 * @desc 味方1の変数
 * @default 12
 *
 * @param ally3Id
 * @desc 味方3の変数
 * @default 13
 *
 * @param ally4Id
 * @desc 味方4の変数
 * @default 14
 *
 * @param ally5Id
 * @desc 味方5の変数
 * @default 15
 *
 * @param enemy1Id
 * @desc 敵1の変数
 * @default 16
 *
 * @param enemy2Id
 * @desc 敵2の変数
 * @default 17
 *
 * @param enemy3Id
 * @desc 敵3の変数
 * @default 18
 *
 * @param enemy4Id
 * @desc 敵4の変数
 * @default 19
 *
 * @param enemy5Id
 * @desc 敵5の変数
 * @default 20
 *
 * @param testMode
 * @desc テスト環境か
 * @default false
 * @type boolean
 *
 * @noteParam faceName
 * @noteRequire 1
 * @noteDir img/faces/
 * @noteType file
 * @noteData enemies
 **/
var Imported = Imported || {};
Imported.TacticsBattleSys = true;

(function () {

    var parameters = PluginManager.parameters('TacticsBattleSys');
    var damagePopupInterval = +(parameters['damagePopupInterval'] || 30);
    var checkSkillId = +(parameters['checkSkillId'] || 0);
    var useUnitHpGauge = parameters['useUnitHpGauge'] === '1';
    var useUnitStateIcon = parameters['useUnitStateIcon'] === '1';
    var useUnitID = parameters['useUnitID'] === '1';
    var colorAreaMove = parameters['colorAreaMove'].split(' ').map(Number);
    var colorAreaRangeWaiting = parameters['colorAreaWaiting'].split(' ').map(Number);
    var colorAreaTargetAlly = parameters['colorAreaTargetAlly'].split(' ').map(Number);
    var colorAreaTargetEnemy = parameters['colorAreaTargetEnemy'].split(' ').map(Number);
    var colorAreaTurnUnit = parameters['colorAreaTurnUnit'].split(' ').map(Number);
    var colorAreaInvisible = parameters['colorAreaInvisible'].split(' ').map(Number);
    var colorAreaInvisibleCover = parameters['colorAreaInvisibleCover'].split(' ').map(Number);
    var backAttackPhysical = +(parameters['backAttackPhysical'] || 1.5);
    var backAttackMagical = +(parameters['backAttackMagical'] || 1.5);
    var reflectAnimationId = +(parameters['reflectAnimationId'] || 0);
    var commandX = +parameters['commandX'];
    var commandY = +parameters['commandY'];
    var commandLineHeight = +parameters['commandLineHeight'];
    var statusBackground = +parameters['statusBackground'];
    var statusNameWidth = +parameters['statusNameWidth'];
    var statusHpWidth = +parameters['statusHpWidth'];
    var statusFaceMirror = parameters['statusFaceMirror'];
    var unitListWidth = +parameters['unitListWidth'];
    var unitListRows = +parameters['unitListRows'];
    var helpWindowLine = +parameters['helpWindowLine'];
    var infoSize = parameters['infoSize'].split('*').map(Number);
    var statusArrowImage = parameters['statusArrowImage'];
    var moveWaitingTime = +parameters['moveWaitingTime'];//移動待ち時間
    var selectWaitingTime = +parameters['selectWaitingTime'];//対象選択待ち時間
    var yesNoWaitingTime = +parameters['yesNoWaitingTime'];//YesNo待ち時間
    var endBattleTime = +parameters['endBattleTime'];//戦闘終了処理時間
    var multiHitPopTime = +parameters['multiHitPopTime'];//多段ヒットポップ表示間隔
    var stateMax = +parameters['stateMax'];//ステート上限値
    var stateIconWidth = +parameters['stateIconWidth'];//バフフレーム表示の間隔
    var wtTurnListMax = +parameters['wtTurnListMax'];//行動順リストに載せる最大ユニット数
    var isDyingHp = +parameters['isDyingHp'];//行動順リストに載せる最大ユニット数
    var paramCriticalColor = parameters['CriticalColor'].split(' ').map(Number);
    var paramMissColor = parameters['MissColor'].split(' ').map(Number);
    var paramWeaknessColor = parameters['WeakColor'].split(' ').map(Number);
    var paramResistanceColor = parameters['ResistColor'].split(' ').map(Number);
    var paramWeaknessLine = +parameters['WeakLine'];
    var paramResistanceLine = +parameters['ResistLine'];
    var paramFontSize = +parameters['FontSize'];
    var paramMaxWidth = +parameters['MaxWidth'];
    var paramFlashDuration = +parameters['FlashDuration'];
    var paramUsingItalic = +parameters['UsingItalic'];
    var paramUsingOutline = +parameters['UsingOutline'];
    var paramCriticalDamage = +parameters['CriticalDamage'];
    var paramMaxElementDamage = +parameters['MaxElementDamage'];
    var cursorImage = parameters['cursorImage'];
    var ally1Id = +parameters['ally1Id'];
    var ally2Id = +parameters['ally2Id'];
    var ally3Id = +parameters['ally3Id'];
    var ally4Id = +parameters['ally4Id'];
    var ally5Id = +parameters['ally5Id'];
    var enemy1Id = +parameters['enemy1Id'];
    var enemy2Id = +parameters['enemy2Id'];
    var enemy3Id = +parameters['enemy3Id'];
    var enemy4Id = +parameters['enemy4Id'];
    var enemy5Id = +parameters['enemy5Id'];
    var testMode = +parameters['testMode'];
    'use strict';

    //プラグインコマンド設定
    const __pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        __pluginCommand.call(this, command, args);
        if (command === 'tacticsBattle') {
            switch (args[0]) {
                case 'start':
                    $gameTemp._startBattleFlag = true;
                    break;
                case 'unitSet':
                    $gameSystem.setBattlerOnline();
                    break;
                case 'matching':
                    $gameSystem.setMatchingOnline();
                    break;
                case 'sync':
                    $gameSystem.syncVariable();
                    break;
            }
        }
    };
    //-----------------------------------------------------------------------------
    // Game_Temp
    //

    // 初期化処理
    var _Game_Temp_initialize = Game_Temp.prototype.initialize;
    Game_Temp.prototype.initialize = function () {
        _Game_Temp_initialize.call(this);
        this._startBattleFlag = false; //戦闘開始フラグ
        this._commandTime = false; //コマンド選択中
        this._cameraWait = false; //カメラ待ちフラグ
        this._countWtTime = false; //行動順計算中か
        this._attacktime = false; //攻撃中か
        this._deadUnitIds = []; //ユニット退場予約用
        this._arrangePattern = 0; //配置パターン
        this._isReservationActionTurn = false;

        this._multiHitCount = 0; //多段ヒット時のカウント用
        this._selectUnit = []; //ユニットリストからのステータス画面で使用する
        //以下トラップやカウンター用の変数設定
        this._reservationActionList = []; //予約された戦闘
    };
    // 多段ヒット時のカウントセット
    Game_Temp.prototype.setMultiHit = function (skill) {
        if (skill.meta.multiHit) {
            $gameTemp._multiHitCount = parseInt(skill.meta.multiHit);
        } else {
            $gameTemp._multiHitCount = 1;//基本的にヒット数は1
        }
    };
    // 多段ヒット時のカウント増加
    Game_Temp.prototype.countMultiHit = function () {
        this._multiHitCount--;
    };
    // 多段ヒット最終ダン
    Game_Temp.prototype.lastMultiHit = function () {
        if (this._multiHitCount <= 1) return true;
        return false;
    };
    // 多段ヒット時終了
    Game_Temp.prototype.endMultiHit = function () {
        if (this._multiHitCount <= 0) return true;
        return false;
    };

    // ユニットの退場予約
    Game_Temp.prototype.setDeadUnitId = function (id) {
        this._deadUnitIds.push(id);
    };

    // 退場予約されているユニットのイベント番号をひとつ返す
    Game_Temp.prototype.deadUnitId = function () {
        return this._deadUnitIds.shift();
    };

    // 退場予約されているユニットが存在するかどうか
    Game_Temp.prototype.isDeadUnit = function () {
        if (this._deadUnitIds.length > 0) {
            return true;
        } else {
            return false;
        }
    };
    /*
     予約アクション系-----------------------------------------------------------------------------
     */
    // トラップ、カウンター、追撃などターン外のアクション予約追加用
    Game_Temp.prototype.addReservationActionList = function (attacker, skill, target, type) {
        var reservationAction = [attacker, skill, target, type];
        this._reservationActionList.push(reservationAction);
    }

    // 予約されたアタッカーユニットの読み込み
    Game_Temp.prototype.loadReservationAttackUnit = function () {
        var reservationAction = this._reservationActionList[0];
        return reservationAction[0];
    }
    // 予約された使用スキルの読み込み
    Game_Temp.prototype.loadReservationUseSkill = function () {
        var reservationAction = this._reservationActionList[0];
        return reservationAction[1];
    }
    // 予約された対象者の読み込み
    Game_Temp.prototype.loadReservationTargetUnit = function () {
        var reservationAction = this._reservationActionList[0];
        return reservationAction[2];
    }
    // 予約されたタイプの読み込み
    Game_Temp.prototype.loadReservationUseSkillType = function () {
        var reservationAction = this._reservationActionList[0];
        return reservationAction[3];
    }
    // 予約されたアクションの削除
    Game_Temp.prototype.removeReservationActionList = function () {
        this._reservationActionList.shift();//この処理で先頭だけが削除されるはず
    }

    // 予約されたアクションがあるか
    Game_Temp.prototype.isReservationAction = function () {
        if (this._reservationActionList) {
            if (this._reservationActionList.length) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    // 予約されたアクションタイプが正しいか
    Game_Temp.prototype.isReservationActionType = function (type) {
        if (this.isReservationAction()) {
            if (this.loadReservationUseSkillType() == type) {
                return true;
            }
        }
        return false;
    }
    // 予約されたアクションターンを開始
    Game_Temp.prototype.startReservationActionTurn = function () {
        this._isReservationActionTurn = true;;
    }
    // 予約されたアクションターンを終了
    Game_Temp.prototype.endReservationActionTurn = function () {
        this._isReservationActionTurn = false;;
    }
    // 予約されたアクションのターンか
    Game_Temp.prototype.isReservationActionTurn = function () {
        return this._isReservationActionTurn;
    }

    // 予約されたアクション数の確認(デバッグ用)
    Game_Temp.prototype.isReservationActionCount = function () {
        return this._reservationActionList.length;
    }


    //-----------------------------------------------------------------------------
    // Game_System
    //

    // 初期化処理
    var _Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function () {
        _Game_System_initialize.call(this);
        this.helpShow = true;
        //Game_Mapから
        this._phaseState = 0; //戦闘中の段階
        this._isAllyTurn = false;
        this._isEnemyTurn = false;
        this._unitList = []; //味方ユニットリスト
        this._allyList = []; //敵ユニットリスト
        this._enemyList = []; //ただのユニットリスト
        this._wtTurnList = []; //行動順リスト
        this._turnUnit = 0; //ターンが回ったユニット
        this._quickTurnUnit = null;//[]; //WT0でも誰を優先的に配置させるか決める
        this.ActorTurn = false; //敵ターンに操作不能にするため(必要ない？)

        this._moveTargetPointFlag = false; //攻撃時移動のフラグ
        this._moveTargetPointX = 0; //攻撃時移動の場合の移動座標X
        this._moveTargetPointY = 0; //攻撃時移動の場合の移動座標X
        this._resurrectionFlag = false; //蘇生フラグ
        this._resurrectionUnit = []; //蘇生ユニット予約用
        //以下オンライン時
        this._uids = [];
        this._allyTeamID = ""; //味方チームのID
        this._enemyTeamID = ""; //敵チームのID
    }


    // SRPG機能が有効になっているかどうかを返す
    Game_System.prototype.isBattleActivate = function () {
        return this._battleActive;
    };

    // SRPG機能を有効にします
    Game_System.prototype.battleActivate = function () {
        this._battleActive = true; //戦闘中

        for (var i = 0; i < this.unitList().length; i++) {
            var unit = this.unitList()[i];
            unit.setStepAnime(true); //足踏みアニメoff
        }
        $gamePlayer.setTransparent(false); //透明化OFF
        $gamePlayer.refresh(); //カーソル化
        //if ($gameSwitches.value(15)) $gameSystem.syncWtList();
    };

    // SRPG機能を無効にします
    Game_System.prototype.battleDeactivate = function () {
        $gameMap.initColorArea();
        this._battleActive = false;
        $gameParty.reviveBattleMembers();
        $gameParty.removeBattleStates();
        $gameParty.members().forEach(function (actor) {
            actor.recoverAll();
            actor.clearTp();
        });
        for (var i = 0; i < this.unitList().length; i++) {
            var unit = this.unitList()[i];
            unit.setStepAnime(false); //足踏みアニメoff
        }
    };

    //ユニットリストを返す
    Game_System.prototype.unitList = function () {
        return this._unitList;
    };

    //味方ユニットリストを返す
    Game_System.prototype.allyList = function () {
        return this._allyList;
    };

    //敵ユニットリストを返す
    Game_System.prototype.enemyList = function () {
        return this._enemyList;
    };

    // SRPGユニットを返す
    Game_System.prototype.units = function (alive) {
        return this.events().filter(function (event) {
            return event.isUnit(alive);
        });
    };
    // 現在ターンが回ってるユニット情報を返す
    Game_System.prototype.turnUnit = function () {
        return $gameMap.event(this._turnUnit);
    };
    // ターンが回ってるユニットをセットする
    Game_System.prototype.setTurnUnit = function (unit) {
        this._turnUnit = unit.event().id;
    };
    // 蘇生ユニットの予約
    Game_System.prototype.setResurrectionUnit = function (unit) {
        this._resurrectionUnit = unit;
    };

    // 蘇生ユニット
    Game_System.prototype.isResurrectionUnit = function () {
        return this._resurrectionUnit;
    };
    // 蘇生ユニットのリセット
    Game_System.prototype.resetResurrectionUnit = function (unit) {
        this._resurrectionUnit = null;
    };
    /*
    行動順系-----------------------------------------------------------------------------
    */

    // 味方ターンかどうかを返す(行動順が回ってきた際にtrueに処理する)
    Game_System.prototype.isAllyTurn = function () {
        return this._isAllyTurn;
    };
    // 敵ターンかどうかを返す(行動順が回ってきた際にtrueに処理する)
    Game_System.prototype.isEnemyTurn = function () {
        return this._isEnemyTurn;
    };
    //ターン開始前の処理
    Game_System.prototype.startTurn = function (turnUnit) {
        //マップ上にいるユニットのすり抜け設定
        for (var i = 0; i < this.unitList().length; i++) {
            var target = this.unitList()[i];
            if (this.isAllyTurn() && target.isAlly() && !(target == turnUnit)) target.setThrough(true);
            if (this.isEnemyTurn() && target.isEnemy() && !(target == turnUnit)) target.setThrough(true);
        }
    };
    // ターンを終了する
    Game_System.prototype.endTurn = function () {
        this._isAllyTurn = false;
        this._isEnemyTurn = false;

        //マップ上にいるユニットのすり抜け設定
        for (var i = 0; i < this.unitList().length; i++) {
            var target = this.unitList()[i];
            if (!target.isActor().isDead()) {
                target.setThrough(false);
                target.setThrough(false);
            }
        }
    };

    //ユニットリスト作成
    Game_System.prototype.setUnitList = function (events) {
        this._unitList = [];
        this._allyList = [];
        this._enemyList = [];
        //戦闘外のイベントを除外する(ユニット追加ケースを考えてfor文の中を別の関数に移行する必要あり)
        for (var i = 0; i < events.length; i++) {
            if (!events[i]) continue;
            var event = events[i];
            var actor = event.isActor();
            if (actor) {
                if (!actor.isDead()) {
                    this._unitList.push(event); //アクターかエネミーである場合イベントを配列にプッシュ
                    event.unitId = this._unitList.length + 1;
                }
                if (event.isAlly()) {
                    this._allyList.push(event);
                } else {
                    this._enemyList.push(event);
                }
            }
        }
    };
    //行動順調整用スクリプト
    Game_System.prototype.setWtTurnList = function () {
        //以下の変数は初期化の時に定義するべきでは？
        //行動順に並べるリスト
        this._wtTurnList = [];
        for (var i = 0; i < this.unitList().length; i++) {
            var unit = this.unitList()[i];
            var battler = unit.isActor();
            var eventId = unit.event().id; //IDを取得
            var wtTurnList = battler.wtTurnList(); //wtリストを取得

            for (var j = 0; j < wtTurnList.length; j++) {
                var list = [];
                list.push(eventId, wtTurnList[j]);
                this._wtTurnList.push(list);
            }
        }
        this.wtTurnListSort();
    };

    //ターンリストを行動順にソート
    Game_System.prototype.wtTurnListSort = function () {
        //WTソート
        this._wtTurnList.sort(function (a, b) {
            if (a[1] < b[1]) return -1;
            if (a[1] > b[1]) return 1;
            return 0;
        });

        //ターンリストを10体に抑えるためのソース
        while (this._wtTurnList.length > wtTurnListMax) {
            this._wtTurnList.pop()//末尾を削除
        }

        //同じWT同士のユニットがいた場合若いID順にソートしたい
        this._wtTurnList.sort(function (a, b) {
            if (a[1] == b[1]) {
                if (a[0] < b[0]) return -1;
                if (a[0] > b[0]) return 1;
                return 0;
            }
        });
    };

    //WTカウント
    Game_System.prototype.countWt = function () {

        //以下が平常時の動作
        for (var i = 0; i < this.unitList().length; i++) {
            var character = this.unitList()[i];
            var battler = character.isActor();

            if (battler.matchWt()) {
                /*
                if ($gameSwitches.value(15)) {
                    if (!$gameSwitches.value(20) && (($gameSwitches.value(21) && this.isEnemyTeam()) || ($gameSwitches.value(22) && this.isAllyTeam()) || (!$gameSwitches.value(21) && !$gameSwitches.value(22) && this.isEnemyTeam()))) {
                        return;
                    }
                }
                */
                //同一WTのユニットがいて先にターンが回られてしまった場合、以降の処理は行わない
                //敵のターンか味方のターンか
                if (character.isAlly()) this._isAllyTurn = true;
                else this._isEnemyTurn = true;

                //どういう風にデータをまとめようか
                this.setTurnUnit(this.unitList()[i]);
                var target = this.turnUnit();
                $gamePlayer.setCameraEvent(target); //カメラをターンが回ったキャラへ回す
                $gameTemp._cameraWait = true;
                $gameTemp._countWtTime = false;

                if ($gameSwitches.value(15)) {
                    if ($gameSwitches.value(19)) $gameSwitches.setValue(19, false);
                    else {
                        $gameSystem.sendInfo();
                        $gameSwitches.setValue(19, true);
                    }
                    $gameSwitches.setValue(21, false);
                    $gameSwitches.setValue(22, false);
                }
                return;
            }
        }
        if ($gameSwitches.value(15)) {
            if (($gameSwitches.value(21) && this.isEnemyTeam()) || ($gameSwitches.value(22) && this.isAllyTeam()) || (!$gameSwitches.value(21) && !$gameSwitches.value(22) && this.isEnemyTeam())) {
                if ($gameSwitches.value(19)) {
                    this.syncWtList();
                    //$gameSwitches.setValue(19, false);
                }
                return;
            }
        }

        //以下が平常時の動作
        for (var i = 0; i < this.unitList().length; i++) {
            var character = this.unitList()[i];
            var battler = character.isActor();

            if (!battler.matchWt()) {
                battler.countWt(); //WT数を加算する
                /*
                //if ($gameSwitches.value(15)) $gameSystem.sendInfo();
                if ($gameSwitches.value(15) && battler.matchWt()) {
                    //this.setTurnUnit(this.unitList()[i]);
                    //$gameSystem.sendInfo();
                    //$gameSwitches.setValue(19, true);
                }
                */
            }
        }
    };

    /*
    ステートチェック系-----------------------------------------------------------------------------
    */
    // マップ上にいるステート
    Game_System.prototype.stateAction = function () {
        //マップ上にいるユニットのステートをチェックする
        for (var i = 0; i < this.unitList().length; i++) {
            var target = this.unitList()[i];
            var actor = target.isActor();
            target._alreadyCover = false; //かばうフラグoff
            target._allyCounterFlag = false; //カウンターフラグoff
            var invalidTargetFlag = false;
            for (var id = 1; id < $dataStates.length; id++) {
                if (actor.isStateAffected(id)) {
                    //瀕死時HP回復
                    var dying = $dataStates[id].meta.dying;
                    var compensation = $dataStates[id].meta.compensation;
                    if (dying && compensation) {
                        if (actor.isDying()) {
                            if (compensation == "buffTurn") {
                                //ダメージ受けた後瀕死状態であった場合
                                actor.gainHp(Math.round((actor.mhp * parseInt(dying) / 100) - actor.hp));
                                //actor.gainHp(Math.round(actor.mhp * isDyingHp / 100));
                                //バフターン短縮
                                actor.reduceStateTurns(id);
                                target.reserveDamagePopup(0);
                            } else if (compensation == "buff") {
                                //ダメージ受けた後瀕死状態であった場合
                                actor.gainHp(Math.round((actor.mhp * parseInt(dying) / 100) - actor.hp));
                                //actor.gainHp(Math.round(actor.mhp * isDyingHp / 100));
                                //バフ消去
                                actor.removeState(id);
                                target.reserveDamagePopup(0);
                            } else if (compensation == "mpCost" && actor.mp >= 1) {
                                //actor.gainMp(Math.round(-actor.mmp * 20 / 100));
                                actor.gainMp(Math.round(-actor.mp));
                                actor.gainHp(Math.round((actor.mhp * isDyingHp / 100) - actor.hp));
                                target.reserveDamagePopup(0);
                            }
                        }
                    }

                    //トラッパーがいない状態でのトラップデバフの扱い
                    var trapGrantor = $dataStates[id].meta.trapGrantor;
                    if (trapGrantor) {
                        if (trapGrantor == "self") { //トラップを付与されたキャラのステータス依存のトラップ(味方全体に効果が及ぶようにするとエラーが起こる)
                            trapGrantorIsArea = true;
                        } else {
                            //マップ上にいるユニットのステートをチェックする
                            for (var j = 0; j < this.unitList().length; j++) {
                                var trapGrantorUnit = this.unitList()[j];
                                var trapGrantorActor = trapGrantorUnit.isActor();
                                var trapGrantorIsArea = false;
                                //if ((trapGrantorActor._classId == parseInt(trapGrantor)) && trapGrantorUnit.isHostileUnit(target)) {
                                if (actor.checkStateGrantorId(trapGrantorActor.eventId(), id)) {
                                    trapGrantorIsArea = true;
                                    break;
                                }
                            }
                        }
                        //トラッパーがいない場合トラップデバフは剥がれる
                        if (!trapGrantorIsArea) actor.removeState(id);
                    }

                    //スティーラーがいない状態でのトラップデバフの扱い
                    var stealGrantor = $dataStates[id].meta.stealGrantor;
                    if (stealGrantor) {
                        //マップ上にいるユニットのステートをチェックする
                        for (var j = 0; j < this.unitList().length; j++) {
                            var stealGrantorUnit = this.unitList()[j];
                            var stealGrantorActor = stealGrantorUnit.isActor();
                            var stealGrantorIsArea = false;
                            //if ((stealGrantorActor._classId == parseInt(stealGrantor)) && stealGrantorUnit.isHostileUnit(target)) {
                            if (actor.checkStateGrantorId(stealGrantorActor.eventId(), id)) {
                                stealGrantorIsArea = true;
                                break;
                            }
                        }
                        //スティーラーがいない場合トラップデバフは剥がれる
                        if (!stealGrantorIsArea) actor.removeState(id);
                    }

                    //スリップデバフの扱い
                    var slipGrantor = $dataStates[id].meta.slipGrantor;
                    if (slipGrantor) {
                        //マップ上にいるユニットのステートをチェックする
                        for (var j = 0; j < this.unitList().length; j++) {
                            var slipUnit = this.unitList()[j];
                            var slipActor = slipUnit.isActor();
                            var slipIsArea = false;
                            //if ((slipActor._classId == parseInt(slipGrantor)) && slipUnit.isHostileUnit(target)) {
                            if (actor.checkStateGrantorId(slipActor.eventId(), id)) {
                                slipIsArea = true;
                                break;
                            }
                        }
                        //付与者がいない場合スリップデバフは剥がれる
                        if (!slipIsArea) actor.removeState(id);
                    }

                    //チェンジバフの扱い
                    var coverGrantor = $dataStates[id].meta.coverGrantor;
                    if (coverGrantor) {
                        //マップ上にいるユニットのステートをチェックする
                        for (var j = 0; j < this.unitList().length; j++) {
                            var coverUnit = this.unitList()[j];
                            var coverActor = coverUnit.isActor();
                            var coverIsArea = false;
                            //if ((coverActor._classId == parseInt(coverGrantor)) && !coverUnit.isHostileUnit(target)) {
                            if (actor.checkStateGrantorId(coverActor.eventId(), id)) {
                                coverIsArea = true;
                                break;
                            }
                        }
                        //付与者がいない場合スリップデバフは剥がれる
                        if (!coverIsArea) actor.removeState(id);
                    }
                    //アクティベートバフの扱い
                    var changeGrantor = $dataStates[id].meta.changeGrantor;
                    if (changeGrantor) {
                        //マップ上にいるユニットのステートをチェックする
                        for (var j = 0; j < this.unitList().length; j++) {
                            var changeUnit = this.unitList()[j];
                            var changeActor = changeUnit.isActor();
                            var changeIsArea = false;
                            //if ((changeActor._classId == parseInt(changeGrantor)) && !changeUnit.isHostileUnit(target)) {
                            if (actor.checkStateGrantorId(changeActor.eventId(), id)) {
                                changeIsArea = true;
                                break;
                            }
                        }
                        //付与者がいない場合スリップデバフは剥がれる
                        if (!changeIsArea) actor.removeState(id);
                    }
                    //ヘイト系バフの扱い
                    if ($dataStates[id].meta.hateGrantor || $dataStates[id].meta.hateState) {
                        //マップ上にいるユニットのステートをチェックする
                        for (var j = 0; j < this.unitList().length; j++) {
                            var hateUnit = this.unitList()[j];
                            var hateActor = hateUnit.isActor();
                            var hateIsArea = false;
                            if (!hateUnit.isHostileUnit(target)) continue;
                            if ($dataStates[id].meta.hateGrantor) {
                                var hateGrantor = $dataStates[id].meta.hateGrantor;
                                //if (hateActor._classId == parseInt(hateGrantor)) {
                                if (actor.checkStateGrantorId(hateActor.eventId(), id)) {
                                    hateIsArea = true;
                                    break;
                                }
                            } else if ($dataStates[id].meta.hateState) {
                                var hateState = $dataStates[id].meta.hateState;
                                if (hateActor.isStateAffected(parseInt(hateState))) {
                                    hateIsArea = true;
                                    break;
                                }
                            }
                        }
                        //付与者がいない場合スリップデバフは剥がれる
                        if (!hateIsArea) actor.removeState(id);
                    }
                    //コントロール系バフの扱い
                    var ctrlGrantor = $dataStates[id].meta.ctrlGrantor;
                    if (ctrlGrantor) {
                        //マップ上にいるユニットのステートをチェックする
                        for (var j = 0; j < this.unitList().length; j++) {
                            var ctrlUnit = this.unitList()[j];
                            var ctrlActor = ctrlUnit.isActor();
                            var ctrlIsArea = false;
                            //if (ctrlActor._classId == parseInt(ctrlGrantor) && !target.isHostileUnit(ctrlUnit)) {
                            if (actor.checkStateGrantorId(ctrlActor.eventId(), id)) {
                                ctrlIsArea = true;
                                break;
                            }
                        }
                        //付与者がいない場合スリップデバフは剥がれる
                        if (!ctrlIsArea) actor.removeState(id);
                    }
                    //アクション系バフの扱い
                    var shiftGrantor = $dataStates[id].meta.shiftGrantor;
                    if (shiftGrantor) {
                        //マップ上にいるユニットのステートをチェックする
                        for (var j = 0; j < this.unitList().length; j++) {
                            var shiftUnit = this.unitList()[j];
                            var shiftActor = shiftUnit.isActor();
                            var shiftIsArea = false;
                            //if (shiftActor._classId == parseInt(shiftGrantor) && !target.isHostileUnit(shiftUnit)) {
                            if (actor.checkStateGrantorId(shiftActor.eventId(), id)) {
                                shiftIsArea = true;
                                break;
                            }
                        }
                        //付与者がいない場合スリップデバフは剥がれる
                        if (!shiftIsArea) actor.removeState(id);
                    }
                    //追跡系デバフの扱い
                    var traceGrantor = $dataStates[id].meta.traceGrantor;
                    if (traceGrantor) {
                        //マップ上にいるユニットのステートをチェックする
                        for (var j = 0; j < this.unitList().length; j++) {
                            var traceUnit = this.unitList()[j];
                            var traceActor = traceUnit.isActor();
                            var traceIsArea = false;
                            //if (traceActor._classId == parseInt(traceGrantor) && target.isHostileUnit(traceUnit)) {
                            if (actor.checkStateGrantorId(traceActor.eventId(), id)) {
                                traceIsArea = true;
                                break;
                            }
                        }
                        //付与者がいない場合スリップデバフは剥がれる
                        if (!traceIsArea) actor.removeState(id);
                    }
                    //タゲ無効時透過
                    var invalid = $dataStates[id].meta.invalid;
                    if (invalid) {
                        if (invalid == "target") {
                            invalidTargetFlag = true;
                        }
                    }
                }
            }
            if (invalidTargetFlag) {
                target.setOpacity(128);
            } else {
                target.setOpacity(255);
            }
        }
    };

    //-----------------------------------------------------------------------------
    // Game_Action
    //

    // 行動主体のセット(Game_Objectから再定義)
    Game_Action.prototype.setSubject = function (subject) {
        //this._subject = subject;
        this._subject = subject.eventId();
    };

    // 行動主体を返す(Game_Objectから再定義)
    Game_Action.prototype.subject = function () {
        //return this._subject;
        return $gameMap.event(this._subject).isActor();
    };

    Game_Action.prototype.itemHit = function (target) {
        if (this.isPhysical()) {
            return this.item().successRate * 0.01 * this.subject().hit;
        } else if (this.isMagical()) {
            return this.item().successRate * 0.01 * this.subject().hit;
        } else {
            return this.item().successRate * 0.01;
        }
    };

    // SRPG用の行動結果適用
    Game_Action.prototype.actionApply = function (target) {
        var result = target.result();
        var turnUnit = $gameMap.event(this.subject().eventId());
        var targetUnit = $gameMap.event(target.eventId());
        this.subject().clearResult();
        result.clear();
        result.used = this.testApply(target);
        result.missed = (result.used && Math.random() >= this.itemHit(target));
        result.evaded = (!result.missed && Math.random() < this.itemEva(target));
        result.physical = this.isPhysical();
        result.drain = this.isDrain();

        var isHit = false;
        if ($gameSwitches.value(15)) {
            var tunit = $gameMap.event(target.eventId());
            var allyId = tunit.allyNumber();
            var enemyId = tunit.enemyNumber();
            var id;
            if (allyId) id = 31 + parseInt(allyId);
            else if (enemyId) id = 36 + parseInt(enemyId);
            if ($gameSystem.isSyncTurn(turnUnit)) {
                isHit = $gameSwitches.value(id);
            } else {
                isHit = result.isHit();
                $gameSwitches.setValue(id, isHit); //イベントIDに依存している
            }
        } else {
            isHit = result.isHit();
        }
        //ヒット時の挙動
        if (isHit) {
            //味方ユニットが対象
            if (turnUnit.isCoverTarget(targetUnit)) {
                //デバフ消去
                if (turnUnit.useSkill().meta.clear) {
                    if (turnUnit.useSkill().meta.clear == "debuff") {
                        target.removeDebuffState();
                    } else if (turnUnit.useSkill().meta.clear == "refresh") {
                        target.removeDebuffState(true);
                    }
                }
                //行動順繰り上げ
                if (turnUnit.useSkill().meta.shift) {
                    //if(target == this.subject()) continue; //自身も対象に含んでる場合無視する
                    if (turnUnit.useSkill().meta.shift == "ally") {
                        target.wtTurnAdvance();
                    }
                }
            }
            //敵対ユニットが対象
            if (turnUnit.isAttackTarget(targetUnit)) {
                //座標入れ替え
                if (turnUnit.useSkill().meta.swap) {
                    if (turnUnit.useSkill().meta.swap == "area") {
                        //座標入れ替え(入れ替えできない、リフレッシュ必要？)
                        var x = turnUnit.x;
                        var y = turnUnit.y;
                        turnUnit.setPosition(targetUnit.x, targetUnit.y);
                        targetUnit.setPosition(x, y);
                    }
                }
                //バフ解除
                if (turnUnit.useSkill().meta.clear) {
                    if (turnUnit.useSkill().meta.clear == "buff") {
                        target.removeBuffState(false);
                    } else if (turnUnit.useSkill().meta.clear == "burst") {
                        target.removeBuffState(true);
                    }
                }

                //スキルによる行動順遅延
                var invalidDelay = false;
                //遅延無効チェック
                for (var id = 1; id < $dataStates.length; id++) {
                    if (target.isStateAffected(id)) {
                        if ($dataStates[id].meta.invalid) {
                            if ($dataStates[id].meta.invalid == "delay") {
                                invalidDelay = true;
                            }
                        }
                    }
                    if (targetUnit.checkInInvisibleArea()) invalidDelay = true;
                }
                if (turnUnit.useSkill().meta.delay && !invalidDelay) {
                    target.wtTurnDelay(parseInt(turnUnit.useSkill().meta.delay));
                } else if (targetUnit.checkDelay() && !invalidDelay) {
                    target.wtTurnDelay(parseInt(targetUnit.checkDelay()));//デバフによる行動順遅延
                }

                //TPドロー
                if (turnUnit.useSkill().meta.stealTp) {
                    var stealTp = target.maxTp() * parseInt(turnUnit.useSkill().meta.stealTp) / 100;
                    if (stealTp >= target.tp) {
                        this.subject().gainTp(target.tp);
                        target.gainTp(-target.tp);
                    } else {
                        this.subject().gainTp(stealTp);
                        target.gainTp(-stealTp);
                    }
                }
                //MP吸収
                if (turnUnit.useSkill().meta.stealMp) {
                    var stealMp = target.mmp * parseInt(turnUnit.useSkill().meta.stealMp) / 100;
                    if (stealMp >= target.mp) {
                        this.subject().gainMp(target.mp);
                        target.gainMp(-target.mp);
                    } else {
                        this.subject().gainMp(stealMp);
                        target.gainMp(-stealMp);
                    }
                }
                //TPダメージ
                if (turnUnit.useSkill().meta.damageTp) {
                    target.gainTp(-parseInt(turnUnit.useSkill().meta.damageTp));
                }
                //デバフ返し
                if (turnUnit.useSkill().meta.throw) {
                    if (turnUnit.useSkill().meta.throw == "debuff") {
                        var states = this.subject()._states; //ステータスIDの配列
                        for (var id = 0; id < states.length; id++) {
                            if ($dataStates[states[id]].meta.type == "debuff") target.addState(this.subject().eventId(), states[id]);
                        }
                        //this.subject().removeDebuffState(); //自身のデバフを消去
                    }
                }
                //攻撃ヒット時に行動負荷がなくなるバフを所持していた場合
                for (var id = 1; id < $dataStates.length; id++) {
                    if (target.isStateAffected(id)) {
                        var shift = $dataStates[id].meta.shift;
                        if (shift) {
                            if (shift == "hit") {
                                target.wtTurnAdvance();
                                //バフ延長
                                //target.extendSelectIdStateTurns(id);
                                target.extendBuffStateTurns();
                            }
                        }
                    }
                }
            }
            var value = -1;
            //ダメージ有の場合
            if (this.item().damage.type > 0) {
                if ($gameSwitches.value(15)) {
                    var tunit = $gameMap.event(target.eventId());
                    var allyId = tunit.allyNumber();
                    var enemyId = tunit.enemyNumber();
                    var id;
                    if (allyId) id = 21 + parseInt(allyId);
                    else if (enemyId) id = 26 + parseInt(enemyId);
                    if ($gameSystem.isSyncTurn(turnUnit)) {
                        value = $gameVariables.value(id);
                    } else {
                        value = this.makeDamageValue(target, false, result.critical);
                        $gameVariables.setValue(id, value); //イベントIDに依存している
                    }
                    if (allyId) id = 41 + parseInt(allyId);
                    else if (enemyId) id = 46 + parseInt(enemyId);
                    if ($gameSystem.isSyncTurn(turnUnit)) {
                        result.critical = $gameSwitches.value(id);
                    } else {
                        result.critical = (Math.random() < this.itemCri(target));
                        $gameSwitches.setValue(id, result.critical); //イベントIDに依存している
                    }
                } else {
                    result.critical = (Math.random() < this.itemCri(target));
                    value = this.makeDamageValue(target, false, result.critical);
                }
                this.executeDamage(target, value);
                //バフ奪取(クリティカル発生時のみ)
                if (turnUnit.useSkill().meta.steal) {
                    if (turnUnit.useSkill().meta.steal == "buff" || turnUnit.useSkill().meta.steal == "burst") {
                        var states = target._states; //ステータスIDの配列
                        for (var id = 0; id < states.length; id++) {
                            if ($dataStates[states[id]].meta.type == "buff") {
                                if ($dataStates[states[id]].meta.buffFixed && (turnUnit.useSkill().meta.steal == "buff" || !result.critical)) continue; //フレーム付きの場合、クリティカルヒット時にダッシュ可能
                                this.subject().addState(this.subject().eventId(), states[id]);
                                target.removeState(states[id]);
                                break;
                            }
                        }
                    }
                }
            }
            //バフデバフの反映
            if ($gameSwitches.value(15)) {
                if ($gameSystem.isSyncTurn(turnUnit)) $gameSystem.syncState(); //ここで同期してしまうとトラップなどが発生しない可能性あり
                else {
                    this.item().effects.forEach(function (effect) {
                        this.applyItemEffect(target, effect); //指定対象にエフェクトを適用。
                    }, this);
                }
            } else {
                this.item().effects.forEach(function (effect) {
                    this.applyItemEffect(target, effect); //指定対象にエフェクトを適用。
                }, this);
            }
            //バフ延長
            if (turnUnit.useSkill().meta.extend) {
                if (turnUnit.useSkill().meta.extend == "buffTurn") target.extendBuffStateTurns();
            }
            //デバフ延長
            if (turnUnit.useSkill().meta.extend) {
                if (turnUnit.useSkill().meta.extend == "debuffTurn") target.extendDebuffStateTurns();
            }
            //敵対ユニットが対象
            if (turnUnit.isAttackTarget(targetUnit)) {
                //ヒットによって行動負荷がなくなるデバフ
                for (var id = 1; id < $dataStates.length; id++) {
                    if (target.isStateAffected(id)) {
                        if ($dataStates[id].meta.shift) {
                            if ($dataStates[id].meta.shift == "mark") {
                                if ($gameTemp.isReservationActionTurn()) {
                                    turnUnit.isActor().wtTurnAdvance();
                                } else {
                                    $gameSystem._quickTurnUnit = turnUnit;
                                }
                            }
                        }
                    }
                }
            }
            //ヒットによって持続ACTが消費するバフ
            if (!($gameTemp.isReservationActionType("trapChase") && $gameTemp.isReservationActionTurn()) && value >= 0) { //トラップ追撃で減少しない
                for (var id = 1; id < $dataStates.length; id++) {
                    if (target.isStateAffected(id)) {
                        if ($dataStates[id].meta.hitDecrease) {
                            if ($dataStates[id].meta.hitDecrease == "buffTurn") {
                                //バフターン短縮
                                target.reduceStateTurns(id);
                            }
                        }
                    }
                }
            }
        } else {
            //攻撃の回避成功時に行動負荷がなくなるバフを所持していた場合
            for (var id = 1; id < $dataStates.length; id++) {
                if (target.isStateAffected(id)) {
                    var shift = $dataStates[id].meta.shift;
                    if (shift) {
                        if (shift == "evasion") {
                            target.wtTurnAdvance();
                            //バフ延長
                            //target.extendSelectIdStateTurns(id);
                            target.extendBuffStateTurns();
                        }
                    }
                }
            }
        }

        if ($gameSwitches.value(15) && !$gameTemp.isReservationAction()) {
            if ($gameSystem.isSyncTurn(turnUnit)) $gameSwitches.setValue(28, false);
            else {
                if ($gameTemp.isReservationAction()) $gameSystem.sendInfo();
                $gameSwitches.setValue(28, true);
            }
        }
    };

    //ダメージ設定
    Game_Action.prototype.makeDamageValue = function (target, evaluate, critical) {
        var baseValue = this.evalDamageFormula(target);
        if (this.calcElementRate(target) <= paramMaxElementDamage) {
            var calcElementRate = this.calcElementRate(target);
        } else {
            var calcElementRate = paramMaxElementDamage;
        }
        var value = baseValue * calcElementRate;
        if (this.isPhysical()) {
            value *= target.pdr;
        }
        if (this.isMagical()) {
            value *= target.mdr;
        }
        if (!evaluate) {
            var item = this.item();
            if (critical) {
                value = this.applyCritical(value);
            }
            value = this.applyVariance(value, item.damage.variance);
        }
        value = this.applyGuard(value, target);
        value = Math.round(value);
        //このあたりにまふうけんやリバースなど吸収だった場合の処理を入れたい
        for (var id = 1; id < $dataStates.length; id++) {
            if (target.isStateAffected(id)) {
                //吸収系の処理
                var absorption = $dataStates[id].meta.absorption;
                if (absorption) {
                    if (absorption == "magic" && this.isMagical() && value > 0) {
                        target.gainMp(value);//まふうけんは与ダメージ分のMPが還元される
                        value *= -1;
                    } else if (absorption == "all") {
                        value *= -1;
                    } else if (absorption == "heal" && value < 0) {
                        value *= -1;
                    }
                }
                var stoneskin = $dataStates[id].meta.stoneskin;
                if (stoneskin && value > 0) {
                    //value = parseInt(Math.max(value - (target.mhp - target.hp) * parseInt(stoneskin) / 100, 0));
                    value = parseInt(Math.max(value - (target.mhp - target.hp) / 2, 0));
                }
            }
        }

        return value;
    };

    // ターゲットに対して有効な効果を返す
    Game_Action.prototype.itemValidEffect = function (target) {
        var effects = this.item().effects;
        for (var i = 0; i < effects.length; i++) {
            var effect = effects[i];
            if (this.testItemEffect(target, effect)) return effect;
        }
        return null;
    };

    //クリティカル発生率(3倍から2倍に)
    Game_Action.prototype.applyCritical = function (damage) {
        return damage * paramCriticalDamage;
    };

    //属性の扱い
    var _Game_Action_calcElementRate = Game_Action.prototype.calcElementRate;
    Game_Action.prototype.calcElementRate = function (target) {
        var result = _Game_Action_calcElementRate.apply(this, arguments);
        if (BattleManager.isInputting()) return result;
        target.resetResistWeak();
        if (result >= paramWeaknessLine / 100) {
            target.hitWeak();
        } else if (result <= paramResistanceLine / 100) {
            target.hitResist();
        }
        return result;
    };

    //TPの仕様変更のため要修正箇所
    var _Game_Action_applyItemUserEffect = Game_Action.prototype.applyItemUserEffect;
    Game_Action.prototype.applyItemUserEffect = function () {
        var value = Math.floor(this.item().tpGain * this.subject().tcr);
        this.subject().gainSilentTp(value);
    };
    //addNewState仕様変更のため再定義する必要あり
    Game_Action.prototype.itemEffectAddNormalState = function (target, effect) {
        var chance = effect.value1;
        if (!this.isCertainHit()) {
            chance *= target.stateRate(effect.dataId);
            chance *= this.lukEffectRate(target);
        }
        if (Math.random() < chance) {
            target.addState(this.subject().eventId(), effect.dataId);
            this.makeSuccess(target);
        }
    };
    Game_Action.prototype.itemEffectAddAttackState = function (target, effect) {
        this.subject().attackStates().forEach(function (stateId) {
            var chance = effect.value1;
            chance *= target.stateRate(stateId);
            chance *= this.subject().attackStatesRate(stateId);
            chance *= this.lukEffectRate(target);
            if (Math.random() < chance) {
                target.addState(this.subject().eventId(), stateId);
                this.makeSuccess(target);
            }
        }.bind(this), target);
    };
    //-----------------------------------------------------------------------------
    // Game_ActionResult
    //
    //ヒットしたか
    var _Game_ActionResult_isHit = Game_ActionResult.prototype.isHit;
    Game_ActionResult.prototype.isHit = function () {
        return !this.missed && !this.evaded;
    };

    //-----------------------------------------------------------------------------
    // Game_BattlerBase
    //

    // 初期化処理
    var _Game_BattlerBase_initialize = Game_BattlerBase.prototype.initialize;
    Game_BattlerBase.prototype.initialize = function () {
        _Game_BattlerBase_initialize.call(this);
        this._wt = 0;
        this._eventId = null; //バトラーと紐づいてるイベントをセットする
        this._selfState = []; //自身がそのターンに付与したバフリスト
    }
    //rpg_object.jsより
    Game_BattlerBase.prototype.clearStates = function () {
        this._states = [];
        this._stateTurns = {};
        this._stateGrantors = {}; //新規追加(ステート付与者)
    };
    //紐づいてるイベントを返す
    Game_BattlerBase.prototype.eventId = function () {
        return this._eventId;
    };
    //イベントを紐づける
    Game_BattlerBase.prototype.setEventId = function (eventId) {
        this._eventId = eventId;
    };

    //ステート付与者を返す
    Game_BattlerBase.prototype.stateGrantor = function (stateId) {
        var grantorId = this._stateGrantors[stateId];
        if (grantorId) return $gameMap.event(grantorId);
        else return null;
    };

    //ステート付与者と一致しているか
    Game_BattlerBase.prototype.checkStateGrantorId = function (targetId, stateId) {
        if (targetId == this._stateGrantors[stateId]) return true;
        else return false;
    };

    // 使用可能時の適合判定
    var _Game_BattlerBase_isOccasionOk = Game_BattlerBase.prototype.isOccasionOk;
    Game_BattlerBase.prototype.isOccasionOk = function (item) {
        // SRPGが有効なら『常時』か『バトル画面』に設定されていれば使用可能
        if ($gameTemp._startBattleFlag) return item.occasion === 0 || item.occasion === 1;
        return _Game_BattlerBase_isOccasionOk.call(this, item);
    };

    //スキルの使用可否
    var _Game_BattlerBase_meetsSkillConditions = Game_BattlerBase.prototype.meetsSkillConditions;
    Game_BattlerBase.prototype.meetsSkillConditions = function (skill) {
        if ($gameTemp.isReservationAction()) { //予約アクションではMPTPは消費しないので条件を変える
            return (this.isSkillWtypeOk(skill) &&
                !this.isSkillSealed(skill.id) && !this.isSkillTypeSealed(skill.stypeId));
        } else {
            return (this.isSkillWtypeOk(skill) && this.canPaySkillCost(skill) &&
                !this.isSkillSealed(skill.id) && !this.isSkillTypeSealed(skill.stypeId));
        }
    };

    // SRPGパラメータを返す
    Game_BattlerBase.prototype.unitParam = function (tag) {
        var result = this.traitObjects().reduce(function (r, object) {
            return r + Number(object.meta[tag] || 0);
        }, 0);
        return Math.max(result, 0);
    };

    // SRPGフラグを返す
    Game_BattlerBase.prototype.unitFlag = function (tag) {
        return this.traitObjects().some(function (object) {
            return object.meta[tag];
        });
    };

    // ユニットのイベント番号をセット
    Game_BattlerBase.prototype.setunitEventId = function (id) {
        this._unitEventId = id;
    };

    // ユニットのイベント番号を返す
    Game_BattlerBase.prototype.unitEventId = function () {
        return this._unitEventId || 0;
    };

    // ユニットイベントを返す
    Game_BattlerBase.prototype.unitEvent = function () {
        return $gameMap.event(this.unitEventId());
    };

    // WTを代入
    Game_BattlerBase.prototype.setWt = function (wt) {
        this._wt = wt;
    };

    // WTを返す
    Game_BattlerBase.prototype.wt = function () {
        return this._wt;
    };

    // WTを加算する
    Game_BattlerBase.prototype.countWt = function () {
        this._wt++;
        //this._wt+= Math.floor(Math.random() * 2) + 1;
    };
    // WT初期化
    Game_BattlerBase.prototype.initWt = function (allyId, enemyId) {
        //オンライン対戦中WTリスト同期中
        if ($gameSwitches.value(15)) {
            var id; //変数
            var id2; //スイッチ
            if (allyId) {
                id = 31 + parseInt(allyId);
                id2 = 51 + parseInt(allyId);
            } else if (enemyId) {
                id = 36 + parseInt(enemyId);
                id2 = 56 + parseInt(enemyId);
            }
            if ($gameSwitches.value(id2)) {
                this._wt = $gameVariables.value(id);
                $gameSwitches.setValue(id2, false);
            } else {
                this._wt = Math.floor(Math.random() * 50);
                $gameSwitches.setValue(id2, true);
                $gameVariables.setValue(id, this._wt);
            }
        } else {
            this._wt = Math.floor(Math.random() * 50); //自身のウェイトターン到達でターンが回り、行動終了後リセットされるような
        }
    };
    // WTをリセットする
    Game_BattlerBase.prototype.resetWt = function (rate) {
        var max = rate + 10;
        var min = rate - 10;
        var distributed = Math.floor(Math.random() * (max - min) + min);
        //オンライン対戦中WTリスト同期中
        if ($gameSwitches.value(15)) {
            var tunit = $gameMap.event(this.eventId());
            var allyId = tunit.allyNumber();
            var enemyId = tunit.enemyNumber();
            var id;
            if (allyId) id = 31 + parseInt(allyId);
            else if (enemyId) id = 36 + parseInt(enemyId);
            if ($gameSystem.isSyncTurn(tunit)) {
                this._wt = $gameVariables.value(id);
            } else {
                this._wt = Math.round(this.wtTurn() * distributed / 100);//0;
                $gameVariables.setValue(id, this._wt); //イベントIDに依存している
            }
        } else {
            this._wt = Math.round(this.wtTurn() * distributed / 100);//0;
        }
    };

    // 自身のターンが回るWT数を返す
    Game_BattlerBase.prototype.wtTurn = function () {
        return parseInt(1000 / this.agi);
    };

    //現在のWTと回るWT数が一致していた場合ターンが回る
    Game_BattlerBase.prototype.matchWt = function () {
        if (this.wt() >= this.wtTurn()) {
            return true;
        } else {
            return false;
        }
    };

    //パラダイムシフトやベロシティチェンジ、ラウンドアサルトなどで行動順を繰り上げてもらう
    Game_BattlerBase.prototype.wtTurnAdvance = function () {
        this._wt = this.wtTurn();
        /*
        if ($gameSwitches.value(15)) {
            if ($gameSystem.isSyncTurn()) {
                $gameSystem.syncWtList();
            } else {
                this._wt = this.wtTurn();
                $gameSystem.sendInfo();
            }
        } else {
            this._wt = this.wtTurn();
        }
        */
    };

    //行動順遅延
    Game_BattlerBase.prototype.wtTurnDelay = function (rate) {
        this._wt -= Math.round(this.wtTurn() * rate / 100);
    };

    //キャラ単体のWTターンリストを返す
    Game_BattlerBase.prototype.wtTurnList = function () {
        var wtTurnList = [];
        for (var i = 0; i < 10; i++) {
            wtTurnList[i] = this.wtTurn() * (i + 1) - this.wt(); //WT
        }
        return wtTurnList;
    };

    //バフ期間更新
    var _Game_BattlerBase_updateStateTurns = Game_BattlerBase.prototype.updateStateTurns;
    Game_BattlerBase.prototype.updateStateTurns = function () {
        for (i = 0; i < this._states.length; i++) {
            var stateId = this._states[i];
            var selfBuff = this._selfState.contains(parseInt(stateId));
            if ((this._stateTurns[stateId] > 0) && !selfBuff) this._stateTurns[stateId]--;
        }
        for (i = this._states.length - 1; i >= 0; i--) {
            var stateId = this._states[i];
            if (this._stateTurns[stateId] <= 0) this.removeState(stateId); //バフ期間が0になったらバフ除去(ステート配列除外によって処理にバグが発生)
        }
    };

    //バフ枠ソート
    var _Game_BattlerBase_sortStates = Game_BattlerBase.prototype.sortStates;
    Game_BattlerBase.prototype.sortStates = function () {
        //付与順に並べるだけにしたい
        for (i = 1; i < this._states.length; i++) {
            if (this._states[i] > 0 && this._states[i - 1] <= 0) {
                this._states[i - 1] = this._states[i];
                this._states[i] = 0;
            }
        }
    };

    //すでに付与されたステートか(元々の関数にバグがあったため改修)
    var _Game_BattlerBase_addNewState = Game_BattlerBase.prototype.addNewState;
    Game_BattlerBase.prototype.addNewState = function (grantorId, stateId) {
        if (stateId === this.deathStateId()) {
            this.die();
        }
        var restricted = this.isRestricted();
        this._states.push(parseInt(stateId));//改修ポイント(確実に数値化する)
        this._stateGrantors[stateId] = grantorId; //付与者情報格納
        //ステート付与者をいれたい
        this.sortStates();
        if (!restricted && this.isRestricted()) {
            this.onRestrict();
        }
    };

    //すでに付与されたステートか(元々の関数にバグがあったため改修)
    var _Game_BattlerBase_isStateAffected = Game_BattlerBase.prototype.isStateAffected;
    Game_BattlerBase.prototype.isStateAffected = function (stateId) {
        //return this._states.contains(parseInt(stateId));
        return this._states.includes(parseInt(stateId));
    };

    //ステータスターン短縮用
    Game_BattlerBase.prototype.reduceStateTurns = function (id) {
        if (this._stateTurns[id] > 0) {
            this._stateTurns[id]--;
            if (this._stateTurns[id] == 0) {//光の盾やマークなどバフターン0になっても解除されなかったため付け足し
                this.eraseState(id);
                this.refresh();
                this._result.pushRemovedState(id);
                this.sortStates(); //バフ解除
            }
        }
    };

    //バフターン延長
    Game_BattlerBase.prototype.extendBuffStateTurns = function () {
        this._states.forEach(function (stateId) {
            if (this._stateTurns[stateId] > 0 && $dataStates[stateId].meta.type == "buff") {
                this._stateTurns[stateId]++;
            }
        }, this);
    };
    //バフターン延長
    Game_BattlerBase.prototype.extendSelectIdStateTurns = function (id) {
        this._states.forEach(function (stateId) {
            if (this._stateTurns[stateId] > 0 && stateId == id) {
                this._stateTurns[stateId]++;
            }
        }, this);
    };
    //デバフターン延長
    Game_BattlerBase.prototype.extendDebuffStateTurns = function () {
        this._states.forEach(function (stateId) {
            if (this._stateTurns[stateId] > 0 && $dataStates[stateId].meta.type == "debuff") {
                this._stateTurns[stateId]++;
            }
        }, this);
    };

    //瀕死時のHPを調整したいため修正
    var _Game_BattlerBase_isDying = Game_BattlerBase.prototype.isDying;
    Game_BattlerBase.prototype.isDying = function () {
        return this.isAlive() && (this._hp < (this.mhp * isDyingHp / 100));
    };
    //-----------------------------------------------------------------------------
    // Game_Battler
    //

    Game_Battler.prototype.clearMessagePopup = function () {
        this._messagePopup = false;
    };

    Game_Battler.prototype.isMessagePopupRequested = function () {
        return this._messagePopup;
    };

    Game_Battler.prototype.startMessagePopup = function (message, flashColor) {
        if (message) {
            this._messagePopup = true;
            this._message = message;
            this._flashColor = flashColor;
        }
    };

    Game_Battler.prototype.clearElementMessagePopup = function () {
        this._elementMessagePopup = false;
    };

    Game_Battler.prototype.isElementMessagePopupRequested = function () {
        return this._elementMessagePopup;
    };

    Game_Battler.prototype.startElementMessagePopup = function (message, flashColor) {
        if (message) {
            this._elementMessagePopup = true;
            this._elementMessage = message;
            this._elementFlashColor = flashColor;
        }
    };

    Game_Battler.prototype.getMessagePopupText = function () {
        return this._message;
    };

    Game_Battler.prototype.getElementMessagePopupText = function () {
        return this._elementMessage;
    };

    Game_Battler.prototype.getMessagePopupFlashColor = function () {
        return this._flashColor;
    };

    Game_Battler.prototype.getElementMessagePopupFlashColor = function () {
        return this._elementFlashColor;
    };

    //弱点を突いたか
    Game_Battler.prototype.isWeak = function () {
        return this._weak;
    };

    //弱点を突かれた
    Game_Battler.prototype.hitWeak = function () {
        this._weak = true;
    };

    //弱点耐性フラグをリセット
    Game_Battler.prototype.resetResistWeak = function () {
        this._weak = false;
        this._resist = false;
    };

    //耐性だったか
    Game_Battler.prototype.isResist = function () {
        return this._resist;
    };

    //耐性を攻撃した
    Game_Battler.prototype.hitResist = function () {
        this._resist = true;
    };

    var _Game_Battler_initMembers = Game_Battler.prototype.initMembers;
    Game_Battler.prototype.initMembers = function () {
        _Game_Battler_initMembers.call(this);
        this._weak = false;
        this._resist = false;
    };

    var _Game_Battler_gainHp = Game_Battler.prototype.gainHp;
    Game_Battler.prototype.gainHp = function (baseValue) {
        var value = this.stateCheck(baseValue);
        if (value > 0) value *= this.rec; //HPリジェネなどHP回復に影響する内容
        this._result.hpDamage = -value;
        this._result.hpAffected = true;
        var result = this.hp + value;
        this.setHp(result);
    };

    // 特殊バフ付与時のHP回復の挙動
    Game_Battler.prototype.stateCheck = function (value) {
        for (var id = 1; id < $dataStates.length; id++) {
            if (this.isStateAffected(id)) {
                //以下いのりや常勝将軍効果による根性効果処理
                var lethal = $dataStates[id].meta.lethal;
                if (lethal) {
                    if (lethal == "guts" && (this.hp + value) <= 0 && !this.isDying()) {
                        return this.hp - 1;
                    }
                }
            }
        }
        return value;
    };

    // 行動のアニメーションIDを返す
    Game_Battler.prototype.actionAnimationId = function (item) {
        var animationId = item.animationId;
        return animationId < 0 ? this.attackAnimationId1() : animationId;
    };

    //ステート付与(rpg_object.jsから流用)
    //ステートの上限数を制限してオーバーしたモノは上書きされる
    //すでに付与されたステートは配列最後尾に移動する形にしたい
    var _Game_Battler_addState = Game_Battler.prototype.addState;
    Game_Battler.prototype.addState = function (grantorId, stateId) {
        //バフ無効デバフ無効ステートがついているか(ついていたら以降の処理を行わない)
        for (var id = 1; id < $dataStates.length; id++) {
            if (this.isStateAffected(id)) {
                if ($dataStates[id].meta.shut) {
                    if ($dataStates[id].meta.shut == "buff") {
                        if ($dataStates[stateId].meta.type == "buff") {
                            return;
                        }
                    }
                    if ($dataStates[id].meta.shut == "debuff") {
                        if ($dataStates[stateId].meta.type == "debuff") {
                            return;
                        }
                    }
                }
            }
        }
        //即死攻撃の扱い
        if (stateId == this.deathStateId()) {
            if (this.isDying() && !this.isStateResist(this.deathStateId())) {
                this.addNewState(grantorId, stateId);
                this.refresh();
                this._result.pushAddedState(parseInt(stateId)); //指定ステートの付加を追加。
                return;
            }
        } else {
            //チャーム系の扱い(女性ユニットならスルー)
            if ($dataStates[stateId].meta.gender) {
                if ($dataStates[stateId].meta.gender == "male" && $dataClasses[this._classId].meta.gender == "female") return;
                if ($dataStates[stateId].meta.gender == "female" && $dataClasses[this._classId].meta.gender == "male") return;
            }

            //上書きしようとするとスルーされる(呼び出されてない)
            if (this.isStateAddable(parseInt(stateId))) { //指定ステートが付与可能か
                //すでに付与されたステートの場合
                if (this.isStateAffected(parseInt(stateId))) {
                    this.removeState(parseInt(stateId));
                }
                //ステートが最大数を超えてしまった場合既存の最初のバフを消去
                if (this._states.length >= stateMax) {
                    for (var i = 0; i < this._states.length; i++) {
                        var removeId = parseInt(this._states[i]);
                        var buffAllFixed = false;
                        var debuffAllFixed = false;
                        for (var j = 0; j < this._states.length; j++) {
                            if ($dataStates[parseInt(this._states[j])].meta.buffAllFixed) buffAllFixed = true;
                            if ($dataStates[parseInt(this._states[j])].meta.debuffAllFixed) debuffAllFixed = true;
                        }
                        if (($dataStates[removeId].meta.type == "buff") && buffAllFixed) continue;
                        if (($dataStates[removeId].meta.type == "debuff") && debuffAllFixed) continue;
                        //バフ解除無効バフが存在するか
                        if ($dataStates[removeId].meta.buffFixed) continue;//バフ消去不能なら以降の処理は行わず、次のステートへ
                        //デバフ解除無効バフが存在するか
                        if ($dataStates[removeId].meta.debuffFixed) continue;//デバフ消去不能なら以降の処理は行わず、次のステートへ
                        this.removeState(removeId);
                        break;
                    }
                }
                //ステート削除に失敗した場合は通らない
                if (this._states.length < stateMax) {
                    this.addNewState(grantorId, stateId);
                    if (!this._selfState.contains(parseInt(stateId)) && grantorId == this.eventId()) this._selfState.push(parseInt(stateId)); //セルフバフ追加
                    this.refresh();
                    this.resetStateCounts(parseInt(stateId)); //指定ステートの有効ターン数を初期化。
                    this._result.pushAddedState(parseInt(stateId)); //指定ステートの付加を追加。
                }
            }
        }
    };

    //ステート除去
    var _Game_Battler_removeState = Game_Battler.prototype.removeState;
    Game_Battler.prototype.removeState = function (stateId) {
        if (this.isStateAffected(stateId)) {
            if (stateId === this.deathStateId()) {
                this.revive();
            }
            this.eraseState(stateId);
            this.refresh();
            this._result.pushRemovedState(stateId);
            this.sortStates(); //新規追加メソッド
        }
    };
    //被ダメ時にステートが除去される系
    Game_Battler.prototype.removeStatesByDamage = function () {
        this.states().forEach(function (state) {
            if (state.removeByDamage && Math.randomInt(100) < state.chanceByDamage) {
                this.removeState(state.id);
            }
        }, this);
    };
    //すべてのバフを除去
    Game_Battler.prototype.removeBuffState = function (burst) {
        for (var stateId = 1; stateId < $dataStates.length; stateId++) {
            if (this.isStateAffected(stateId)) {
                if ($dataStates[stateId].meta.type == "buff") {

                    //バフ消去不能なバフかどうか
                    if ($dataStates[stateId].meta.buffFixed && !burst) continue; //バフ消去不能なら以降の処理は行わず、次のステートへ
                    else {
                        var buffAllFixed = false;
                        for (var allId = 1; allId < $dataStates.length; allId++) {
                            if (this.isStateAffected(allId)) {
                                if ($dataStates[allId].meta.buffAllFixed && !burst) {
                                    buffAllFixed = true;
                                }
                            }
                        }
                        if (!buffAllFixed) {
                            this.eraseState(stateId);
                            this.refresh();
                            this._result.pushRemovedState(stateId);
                            this.sortStates(); //新規追加メソッド
                        }
                    }
                }
            }
        }
    };
    //すべてのデバフを除去
    Game_Battler.prototype.removeDebuffState = function (burst) {
        for (var stateId = 1; stateId < $dataStates.length; stateId++) {
            if (this.isStateAffected(stateId)) {
                if ($dataStates[stateId].meta.type == "debuff") {

                    //デバフ消去不能なバフかどうか
                    if ($dataStates[stateId].meta.debuffFixed && !burst) continue;//バフ消去不能なら以降の処理は行わず、次のステートへ
                    else {
                        var debuffAllFixed = false;
                        for (var allId = 1; allId < $dataStates.length; allId++) {
                            if (this.isStateAffected(allId)) {
                                if ($dataStates[allId].meta.debuffAllFixed && !burst) {
                                    debuffAllFixed = true;
                                }
                            }
                        }
                        if (!debuffAllFixed) {
                            this.eraseState(stateId);
                            this.refresh();
                            this._result.pushRemovedState(stateId);
                            this.sortStates(); //新規追加メソッド
                        }
                    }
                }
            }
        }
    };
    //被ダメ時(ステート削除、TP獲得)
    Game_Battler.prototype.onDamage = function (value) {
        this.removeStatesByDamage();
        //this.gainSilentTp(5); //被ダメ時は10%分TP獲得される(TP使い放題になりそうなので廃止)
        //this.chargeTpByDamage(value / this.mhp);
    };
    //コントロールステートが付与されているか
    Game_Battler.prototype.checkCtrlGrantor = function () {
        for (var stateId = 1; stateId < $dataStates.length; stateId++) {
            if (this.isStateAffected(stateId)) {
                if ($dataStates[stateId].meta.ctrlGrantor) return $dataStates[stateId].meta.ctrlGrantor;
            }
        }
        return false;
    };
    //ヘイトステートが付与されているか
    Game_Battler.prototype.checkHateState = function () {
        for (var stateId = 1; stateId < $dataStates.length; stateId++) {
            if (this.isStateAffected(stateId)) {
                if ($dataStates[stateId].meta.hateGrantor) return stateId;
            }
        }
        return null;
    };
    //操作不能ステートが付与されているか
    Game_Battler.prototype.checkNoCtrlState = function () {
        for (var stateId = 1; stateId < $dataStates.length; stateId++) {
            if (this.isStateAffected(stateId)) {
                if ($dataStates[stateId].meta.noCtrl) return true;
            }
        }
        return false;
    };
    Game_Battler.prototype.refresh = function () {
        Game_BattlerBase.prototype.refresh.call(this);
        if (this.hp === 0) {
            this.addState(this.eventId(), this.deathStateId());
        } else {
            this.removeState(this.deathStateId());
        }
    };
    //-----------------------------------------------------------------------------
    // Game_Actor
    //

    //攻撃動作を実行
    var _Game_Actor_performAttack = Game_Actor.prototype.performAttack;
    Game_Actor.prototype.performAttack = function () {
        var weapons = this.weapons();
        var wtypeId = weapons[0] ? weapons[0].wtypeId : 0; //武器(weapons[0])のIDを代入
        var attackMotion = $dataSystem.attackMotions[wtypeId];
        if (attackMotion) {
            if (attackMotion.type === 0) {
                this.requestMotion('thrust');
            } else if (attackMotion.type === 1) {
                this.requestMotion('swing');
            } else if (attackMotion.type === 2) {
                this.requestMotion('missile');
            }
            //this.startWeaponAnimation(attackMotion.weaponImageId);
            this.startWeaponAnimation(wtypeId);
        }
    };

    //盗賊の証や不可視弱体効果などを取り扱うため改造する
    var _Game_Actor_paramPlus = Game_Actor.prototype.paramPlus;
    Game_Actor.prototype.paramPlus = function (paramId) {
        var value = Game_Battler.prototype.paramPlus.call(this, paramId);
        var equips = this.equips();
        for (var i = 0; i < equips.length; i++) {
            var item = equips[i];
            if (item) {
                value += item.params[paramId];
            }
        }
        //ここからバフデバフバフフィールドの影響でパラメータの上げ下げを行う(ブラッドもここで取り扱った方がよい？)
        for (var id = 1; id < $dataStates.length; id++) {
            if (this.isStateAffected(id)) {
                /*
                //ブラッド系(最大HPを下げる)
                var invalid = $dataStates[id].meta.invalid;
                if(invalid){ 
                  if(invalid == "mhp" && paramId == 0){
                    var mhp = this.paramBase(0);
                    if(mhp != this.hp){
                      value = -(mhp - this.hp);
                    }
                    break;
                  }
                }
                */
                //イカサマバフ
                var ikasama = $dataStates[id].meta.ikasama;
                if (ikasama) {
                    if (paramId == 0) {
                        var max = 1000;
                        var min = 0;
                        var rate = parseInt(Math.floor(Math.random() * (max - min) + min));
                        value += Math.round((value + this.paramBase(paramId)) * rate / 100);
                    } else if (paramId == 1) {
                        var max = 500;
                        var min = 0;
                        var rate = parseInt(Math.floor(Math.random() * (max - min) + min));
                        value += Math.round((value + this.paramBase(paramId)) * rate / 100);
                    } else if (paramId == 2) {
                        var max = 80;
                        var min = 0;
                        var rate = parseInt(Math.floor(Math.random() * (max - min) + min));
                        value += Math.round((value + this.paramBase(paramId)) * rate / 100);
                    } else if (paramId == 3) {
                        var max = 80;
                        var min = 0;
                        var rate = parseInt(Math.floor(Math.random() * (max - min) + min));
                        value += Math.round((value + this.paramBase(paramId)) * rate / 100);
                    } else if (paramId == 4) {
                        var max = 40;
                        var min = 0;
                        var rate = parseInt(Math.floor(Math.random() * (max - min) + min));
                        value += Math.round((value + this.paramBase(paramId)) * rate / 100);
                    } else if (paramId == 5) {
                        var max = 40;
                        var min = 0;
                        var rate = parseInt(Math.floor(Math.random() * (max - min) + min));
                        value += Math.round((value + this.paramBase(paramId)) * rate / 100);
                    } else if (paramId == 6) {
                        var max = 160;
                        var min = 0;
                        var rate = parseInt(Math.floor(Math.random() * (max - min) + min));
                        value += Math.round((value + this.paramBase(paramId)) * rate / 100);
                    }
                }
                //リユニオンバフ(セフィロスのステータスをアップ)
                var field = $dataStates[id].meta.field;
                var reunion = $dataStates[id].meta.reunion;
                if (field && reunion && $gameSystem.unitList()) {
                    //マップ上にいるユニットのステートをチェックする
                    for (var i = 0; i < $gameSystem.unitList().length; i++) {
                        var reunionUnit = $gameSystem.unitList()[i];
                        var reunionActor = reunionUnit.isActor();
                        //オンラインデータベースの都合上アクタークラスからキャラクラスにアクセスしないようにしたい
                        if ($gameMap.event(this.eventId()).targetRange(reunionUnit) <= parseInt(field)) {
                            value += Math.round((value + this.paramBase(paramId)) * 5 / 100);
                        }
                    }
                }
            }
        }
        if ($gameSystem.unitList()) {
            //マップ上にいるユニットのステートをチェックする
            for (var i = 0; i < $gameSystem.unitList().length; i++) {
                var robbedUnit = $gameSystem.unitList()[i];
                var robbedActor = robbedUnit.isActor(); //メソッドをデータベースに保存してないからエラーが発生する
                //オンラインデータベースの都合上アクタークラスからキャラクラスにアクセスしないようにしたい
                if (robbedUnit == $gameMap.event(this.eventId())) continue;
                for (var id = 1; id < $dataStates.length; id++) {
                    if (robbedActor.isStateAffected(id)) {
                        var stealGrantor = $dataStates[id].meta.stealGrantor;
                        if (stealGrantor) {
                            //if (this._classId == parseInt(stealGrantor)) {
                            if (robbedActor.checkStateGrantorId(this.eventId(), id)) {
                                var atk = $dataStates[id].meta.stealAtk;
                                var def = $dataStates[id].meta.stealDef;
                                var mat = $dataStates[id].meta.stealMat;
                                var mdf = $dataStates[id].meta.stealMdf;
                                var agi = $dataStates[id].meta.stealAgi;
                                if (paramId == 2 && atk) {
                                    var rate = parseInt(atk);
                                    value += Math.round((value + this.paramBase(paramId)) * rate / 100);
                                } else if (paramId == 3 && def) {
                                    var rate = parseInt(def);
                                    value += Math.round((value + this.paramBase(paramId)) * rate / 100);
                                } else if (paramId == 4 && mat) {
                                    var rate = parseInt(mat);
                                    value += Math.round((value + this.paramBase(paramId)) * rate / 100);
                                } else if (paramId == 5 && mdf) {
                                    var rate = parseInt(mdf);
                                    value += Math.round((value + this.paramBase(paramId)) * rate / 100);
                                } else if (paramId == 6 && agi) {
                                    var rate = parseInt(agi);
                                    value += Math.round((value + this.paramBase(paramId)) * rate / 100);
                                }
                            }
                        }
                        //リユニオンバフ(領域内のユニットのステータスをダウン)
                        var field = $dataStates[id].meta.field;
                        var reunion = $dataStates[id].meta.reunion;
                        if (field && reunion) {
                            //オンラインデータベースの都合上アクタークラスからキャラクラスにアクセスしないようにしたい
                            if (robbedUnit.targetRange($gameMap.event(this.eventId())) <= parseInt(field)) {
                                value -= Math.round((value + this.paramBase(paramId)) * 5 / 100);
                            }
                        }
                        //テラー(領域内のユニットのステータスをダウン)
                        var teller = $dataStates[id].meta.teller;
                        if (field && teller && robbedUnit.isAttackTarget($gameMap.event(this.eventId()))) {
                            if (robbedUnit.targetRange($gameMap.event(this.eventId())) <= parseInt(field)) {
                                value -= Math.round((value + this.paramBase(paramId)) * 20 / 100);
                            }
                        }
                        //親征の檄(領域内の味方ユニットのステータスをアップ)
                        var conquest = $dataStates[id].meta.conquest;
                        if (field && conquest && robbedUnit.isCoverTarget($gameMap.event(this.eventId()))) {
                            if (robbedUnit.targetRange($gameMap.event(this.eventId())) <= parseInt(field)) {
                                value += Math.round((value + this.paramBase(paramId)) * 10 / 100);
                            }
                        }
                    }
                }
            }
        }
        return value;
    };

    //-----------------------------------------------------------------------------
    // Game_Map
    //

    // 戦闘開始用のセッティング
    Game_Map.prototype.setStartBattle = function () {


        //以下Game_Mapで宣言するべき
        this._area = {}; //エリアトーン表示
        this._invisibleArea = {}; //バフフィールド表示
        this._targetArea = {}; //効果範囲のバトラー登録


        //if ($gameSwitches.value(15)) return;
        $gameTemp._countWtTime = true; //WT計算中フラグ
        //this.battleActivate();
        this.initColorArea();
        this.setupTilePassableTable();        // 地形通行判定テーブルのセットアップ
        this.setupTacticsUnits();                // SRPGユニットのセットアップ
        //行動順調整スクリプト(本来ここでは使わない)
        $gameSystem.setUnitList(this.events());
        if ($gameSwitches.value(27)) {
            $gameSystem.syncWtList();
            $gameSwitches.setValue(27, false);
        } else {
            $gameSystem.setWtTurnList();
            $gameSwitches.setValue(27, true);
        }
    };

    // Map上のSRPGユニットのセットアップ
    Game_Map.prototype.setupTacticsUnits = function () {

        for (var i = 1; i < this._events.length; i++) {
            if (this._events[i]) this._events[i].setBattler();

        }
    };

    // アニメーション表示中のSRPGユニットがいるかどうかを返す
    Game_Map.prototype.isUnitAnimationPlaying = function () {
        for (var i = 1; i < this._events.length; i++) {
            var event = this._events[i];
            if (event) {
                if (event.isAnimationPlaying()) {
                    return true;
                }
            }
        }
        return false;
    };

    // 残っているアクターユニットの数を更新
    Game_Map.prototype.updateAllyUnitNums = function () {
        var count = 0;
        for (var i = 1; i < this._events.length; i++) {
            if (!this._events[i]) continue;
            var event = this._events[i];
            var actor = event.isAlly();
            if (actor) {
                if (!actor.isDead()) {
                    count++;
                }
            }
        }
        return count;
    };

    // 残っているエネミーユニットの数を更新
    Game_Map.prototype.updateEnemyUnitNums = function () {
        var count = 0;
        for (var i = 1; i < this._events.length; i++) {
            if (!this._events[i]) continue;
            var event = this._events[i];
            var actor = event.isEnemy();
            if (actor) {
                if (!actor.isDead()) {
                    count++;
                }
            }
        }
        return count;
    };
    /*
    座標系-----------------------------------------------------------------------------
    */
    // 範囲表示カラーを初期化
    Game_Map.prototype.initColorArea = function () {
        if (!Imported.SAN_TileToner) return;
        this.clearTileTones();
    };

    // 範囲表示カラーをセット
    Game_Map.prototype.setColorArea = function (colorParam) {
        if (!Imported.SAN_TileToner) return;
        //移動・射程など(バフフィールドと被ってる箇所を別色で塗りたい)
        var keys = Object.keys(this._area);
        for (var i = 0, a; i < keys.length; i++) {
            a = keys[i].split(',').map(Number);
            this.setTileTone.apply(this, a.concat(colorParam));
        }
    };

    // バフフィールドカラーをセット
    Game_Map.prototype.setColorInvisibleArea = function () {
        if (!Imported.SAN_TileToner) return;
        this.clearTileTones();
        //バフフィールドを先に描画する
        var keys = Object.keys(this._invisibleArea);
        for (var i = 0, a; i < keys.length; i++) {
            a = keys[i].split(',').map(Number);
            this.setTileTone.apply(this, a.concat(colorAreaInvisible));
        }
    };

    // ターンが回ったユニットを示すカラーをセット
    Game_Map.prototype.setColorUnitArea = function (unit) {
        if (!Imported.SAN_TileToner) return;
        //var unit = this._turnUnit;
        var a = [];
        a.push(unit.x);
        a.push(unit.y);
        this.setTileTone.apply(this, a.concat(colorAreaTurnUnit));
    };

    // 移動可能範囲を設定する
    Game_Map.prototype.setMovableArea = function (unit) {
        this._area = {};
        this.setupPassableTable(unit);        // 通行判定テーブルをセットアップ
        this.checkMovableArea(unit);          // 移動可能範囲のルートチェック
        //this.deleteAreaOverlapEvent(unit);        // すでにイベントがある座標を除外
        this.deleteCantMoveArea(unit, "move"); //移動できないエリアを除外(未完成)
        this.memoryMovableArea();  //移動可能範囲を記憶する
    };

    // バフフィールドを設定する
    Game_Map.prototype.setInvisibleArea = function (unitList) {
        this._invisibleArea = {};
        for (var i = 0; i < unitList.length; i++) {
            var target = unitList[i];
            var targetActor = target.isActor();
            for (var id = 1; id < $dataStates.length; id++) {
                if (targetActor.isStateAffected(id)) {
                    var field = $dataStates[id].meta.field;
                    if (field) {
                        this._invisibleArea = this.createInvisibleArea(target.x, target.y, field, this._invisibleArea);
                    }
                }
            }
        }
    };
    // バフフィールドを作成する
    Game_Map.prototype.createInvisibleArea = function (x, y, field, area) {
        var a = (field || 'diamond 0').split(' ');
        //return this.createArea(x, y, ['diamond', field]);
        return this.createAreaCombine(x, y, ['diamond', field], area);
    };

    // バフフィールドを表示する
    Game_Map.prototype.showInvisibleArea = function (unit) {
        this.initColorArea();
        this.setColorInvisibleArea();
        this.setColorUnitArea(unit);
    };

    // 移動可能範囲を表示する
    Game_Map.prototype.showMovableArea = function (unit) {
        this.initColorArea();
        this.setColorInvisibleArea();
        this.setColorUnitArea(unit);
        this.setColorArea(colorAreaMove);
    };

    // 移動エリアを記憶する
    Game_Map.prototype.memoryMovableArea = function () {
        this._movaleArea = this._area;  //移動用のエリアを記憶する用
    };

    // 記憶した移動エリアを設定する
    Game_Map.prototype.setMemoryMovableArea = function () {
        this._area = this._movaleArea;  //移動用のエリアを記憶する用
    };

    // 指定座標の範囲の値を返す
    Game_Map.prototype.areaXy = function (x, y) {
        return this._area['' + x + ',' + y];
    };

    // 指定座標が範囲に含まれているかを返す
    Game_Map.prototype.isInsideArea = function (x, y) {
        return this.areaXy(x, y) !== undefined;
    };

    // 移動範囲を作成
    Game_Map.prototype.moveArea = function (unit, move) {
        this._area = this.createArea(unit.x, unit.y, ['diamond', move, 'rect', 0]);
    };


    // 射程範囲を表示する
    Game_Map.prototype.showRangeArea = function (turnUnit, weapon) {
        var skill = turnUnit.useSkill();
        this.initColorArea();
        this._area = this.createRangeArea(turnUnit, weapon);
        //この辺りに自身の座標を基に対象エリアを削除していく(実装が難しいためコメントアウト)
        //this.deleteCantRangeArea(turnUnit);
        //タイルカラーの表示
        if (skill.meta.move || skill.meta.resurrection) {
            this.deleteCantMoveArea(turnUnit, "attack");
            this.setColorArea(colorAreaMove); //移動しながら攻撃の場合はカラーが移動時の色
        } else {
            if (skill.scope == 1 || skill.scope == 2) {
                this.setColorArea(colorAreaTargetEnemy);
            } else if (skill.scope == 7 || skill.scope == 8 || skill.scope == 11) {
                this.setColorArea(colorAreaTargetAlly);
            }
        }
    };

    // 射程範囲を作成する(オンライン時skillにnullが入って強制終了(同期失敗))
    Game_Map.prototype.createRangeArea = function (turnUnit, weapon) {
        var x = turnUnit.x;
        var y = turnUnit.y;
        var skill = turnUnit.useSkill();
        var a = (skill.meta.range || 'diamond 1').split(' ');
        a[1] = parseInt(a[1]);
        if (a[0] == "weapon") {
            if (weapon) {
                a = (weapon.meta.range || 'diamond 1').split(' ');
            } else {
                a = ('diamond 1').split(' ');
            }
        }

        //このあたりに射程延長ステートを反映させる
        for (var id = 1; id < $dataStates.length; id++) {
            if (skill.scope == 11) break;
            if (turnUnit.isActor().isStateAffected(id)) {
                var rangePlus = $dataStates[id].meta.rangePlus;
                if (rangePlus) {
                    a[1] = parseInt(a[1]) + parseInt(rangePlus);
                    break;
                }
            }
        }

        return this.createArea(x, y, a);
    };

    // 効果範囲を表示する
    Game_Map.prototype.showEffectArea = function (turnUnit) {
        var skill = turnUnit.useSkill();
        this._area = this.createEffectArea(turnUnit);
        this._targetArea = this._area; //対象範囲を登録する
        //この辺りに対象を基にエリアを削除していく
        //this.deleteCantEffectArea(turnUnit);
        //タイルカラーの表示
        this.initColorArea();
        this.setColorInvisibleArea();
        if (skill.scope == 1 || skill.scope == 2) {
            this.setColorArea(colorAreaTargetEnemy);
        } else if (skill.scope == 7 || skill.scope == 8 || skill.scope == 11) {
            this.setColorArea(colorAreaTargetAlly);
        }
    };

    // 効果範囲を作成する
    Game_Map.prototype.createEffectArea = function (turnUnit) {
        var x = turnUnit.target().x;
        var y = turnUnit.target().y;
        var skill = turnUnit.useSkill();
        var a = (skill.meta.effect || 'diamond 0').split(' ');
        //周囲の敵に攻撃したい場合
        if (a[1] == "self") {
            x = turnUnit.x;
            y = turnUnit.y;
            a = (skill.meta.range || 'diamond 0').split(' ');
        }
        //移動しながらの攻撃の場合
        if (skill.meta.move) {
            x = $gameSystem._moveTargetPointX;
            y = $gameSystem._moveTargetPointY;
        }

        //蘇生の場合
        if (skill.meta.resurrection) {
            x = $gameSystem.isResurrectionUnit()._x;
            y = $gameSystem.isResurrectionUnit()._y;
        }
        //このあたりに効果延長ステートを反映させる
        for (var id = 1; id < $dataStates.length; id++) {
            if (skill.scope == 1 || skill.scope == 7 || skill.scope == 11) break;
            if (turnUnit.isActor().isStateAffected(id)) {
                var effectPlus = $dataStates[id].meta.effectPlus;
                if (effectPlus) {
                    a[1] = parseInt(a[1]) + parseInt(effectPlus);
                    break;
                }
            }
        }
        return this.createArea(x, y, a);
    };

    // 検索範囲を表示する
    Game_Map.prototype.showCheckArea = function (unit, range) {
        this._area = this.createCheckArea(unit, range);
    };

    // 検索範囲を作成する
    Game_Map.prototype.createCheckArea = function (unit, range) {
        var x = unit.x;
        var y = unit.y;
        var a = (skill.meta.range || 'diamond 1').split(' ');
        a[0] = 'diamond';
        a[1] = range;

        return this.createArea(x, y, a);
    };

    // 指定座標に味方がいるか返す
    Game_Map.prototype.unitAllyXy = function (x, y) {
        event = this.unitXy(x, y);
        if (event) {
            if (event.isAlly() || (event.isEnemy() && event.isActor().checkCtrlGrantor())) {
                return event;
            }
        }
        return null;
    };
    // 指定座標に敵がいるか返す
    Game_Map.prototype.unitEnemyXy = function (x, y) {
        event = this.unitXy(x, y);
        if (event) {
            if (event.isEnemy() || (event.isAlly() && event.isActor().checkCtrlGrantor())) {
                return event;
            }
        }
        return null;
    };
    // 指定座標に攻撃対象ユニットがいるか返す
    Game_Map.prototype.unitAttackTargetXy = function (x, y, unit) {
        event = this.unitXy(x, y);
        if (event) {
            if (unit.isAttackTarget(event)) {
                return event;
            }
        }
        return null;
    };
    // 指定座標に支援対象ユニットがいるか返す
    Game_Map.prototype.unitCoverTargetXy = function (x, y, unit) {
        event = this.unitXy(x, y);
        if (event) {
            if (unit.isCoverTarget(event)) {
                return event;
            }
        }
        return null;
    };
    // 指定座標にユニットがいるか返す
    Game_Map.prototype.unitXy = function (x, y) {
        var events = this._events;
        for (var i = 1; i < events.length; i++) {
            if (!events[i]) continue;
            var event = events[i];

            //アクターがない場合、次のループへ移行
            if (!event._actor) continue;
            //対象が戦闘不能状態の場合も次のループへ
            if (event.isActor().isDead()) continue;

            if (event.pos(x, y)) return event;
        }
        return null;
    };

    // 範囲内のSRPGユニットを返す
    Game_Map.prototype.unitsArea = function (area, alive) {
        //area = area || this._area;
        var result = [];
        //var events = this.units(alive); //←ここで問題発生
        var events = this._events;
        for (var i = 1; i < events.length; i++) {
            if (!events[i]) continue;
            var event = events[i];
            if (event._actor) {
                var key = '' + event.x + ',' + event.y;
                if (area[key]) result.push(event);
            }
        }
        return result;
    };

    // 範囲を作成する
    Game_Map.prototype.createArea = function (x, y, param) {
        var area = {};
        if (param[0] === 'diamond') {
            this.setArea(area, this.isAreaValidDiamond, x, y, +param[1], true);
        } else if (param[0] === 'rect') {
            this.setArea(area, this.isAreaValidRect, x, y, +param[1], true);
        } else if (param[0] === 'line') {
            this.setArea(area, this.isAreaValidLine, x, y, +param[1], true);
        }
        if (param[2] === 'diamond') {
            this.deleteArea(area, this.isAreaValidDiamond, x, y, +param[3], false);
        } else if (param[2] === 'rect') {
            this.deleteArea(area, this.isAreaValidRect, x, y, +param[3], false);
        } else if (param[2] === 'line') {
            this.deleteArea(area, this.isAreaValidLine, x, y, +param[3], false);
        }
        return area;
    };

    // 複数の範囲を作成する
    Game_Map.prototype.createAreaCombine = function (x, y, param, area) {
        if (param[0] === 'diamond') {
            this.setArea(area, this.isAreaValidDiamond, x, y, +param[1], true);
        } else if (param[0] === 'rect') {
            this.setArea(area, this.isAreaValidRect, x, y, +param[1], true);
        } else if (param[0] === 'line') {
            this.setArea(area, this.isAreaValidLine, x, y, +param[1], true);
        }
        if (param[2] === 'diamond') {
            this.deleteArea(area, this.isAreaValidDiamond, x, y, +param[3], false);
        } else if (param[2] === 'rect') {
            this.deleteArea(area, this.isAreaValidRect, x, y, +param[3], false);
        } else if (param[2] === 'line') {
            this.deleteArea(area, this.isAreaValidLine, x, y, +param[3], false);
        }
        return area;
    };

    Game_Map.prototype.setArea = function (area, checker, x, y, size) {
        for (var x2 = x - size; x2 <= x + size; x2++) {
            for (var y2 = y - size; y2 <= y + size; y2++) {
                if (checker(x, y, x2, y2, size)) area['' + x2 + ',' + y2] = true;
            }
        }
    };

    Game_Map.prototype.deleteArea = function (area, checker, x, y, size) {
        for (var x2 = x - size; x2 <= x + size; x2++) {
            for (var y2 = y - size; y2 <= y + size; y2++) {
                if (checker(x, y, x2, y2, size)) delete area['' + x2 + ',' + y2];
            }
        }
    };

    Game_Map.prototype.isAreaValidDiamond = function (x, y, x2, y2, size) {
        return Math.abs(x - x2) + Math.abs(y - y2) <= size;
    };

    Game_Map.prototype.isAreaValidRect = function (x, y, x2, y2, size) {
        return true;
    };

    Game_Map.prototype.isAreaValidLine = function (x, y, x2, y2, size) {
        return x === x2 || y === y2;
    };

    // 地形通行判定テーブルをセットアップ(機能してないような(地形タグで管理してる？))
    Game_Map.prototype.setupTilePassableTable = function () {
        this._normalTilePassableTable = [];
        this._floatTilePassableTable = [];
        this._shipTilePassableTable = [];
        this._terrainTagTable = [];
        for (var x = 0; x < this.width(); x++) {
            this._normalTilePassableTable[x] = [];
            this._floatTilePassableTable[x] = [];
            this._shipTilePassableTable[x] = [];
            for (var y = 0; y < this.height(); y++) {
                this._normalTilePassableTable[x][y] = [];
                this._floatTilePassableTable[x][y] = [];
                this._shipTilePassableTable[x][y] = [];
                for (var d = 2; d <= 8; d += 2) {
                    var x2 = this.roundXWithDirection(x, d);
                    var y2 = this.roundYWithDirection(y, d);
                    if (this.isValid(x2, y2)) {
                        var d2 = 10 - d;
                        var index = d / 2 - 1;
                        var pass2 = this.isPassable(x2, y2, d2);
                        if (this.isPassable(x, y, d) && pass2) {
                            this._normalTilePassableTable[x][y][index] = true;
                            this._shipTilePassableTable[x][y][index] = true;
                        } else if (this.isShipPassable(x2, y2) ||
                            (this.isShipPassable(x, y) && pass2)) {
                            this._shipTilePassableTable[x][y][index] = true;
                        }
                        this._floatTilePassableTable[x][y][index] = true;
                    }
                }
                if (this.terrainTag(x, y) === 1) {
                    this._terrainTagTable.push(new Point(x, y));
                }
            }
        }
    };


    // 通行判定テーブルをセットアップ
    Game_Map.prototype.setupPassableTable = function (unit) {
        if (unit.isFloat()) {
            this._passableTable = JSON.parse(JSON.stringify(this._floatTilePassableTable));
        } else if (unit.isShip()) {
            this._passableTable = JSON.parse(JSON.stringify(this._shipTilePassableTable));
        } else {
            this._passableTable = JSON.parse(JSON.stringify(this._normalTilePassableTable));
        }
        var events = this._events;
        for (var i = 1, len = events.length; i < len; i++) {
            if (!events[i]) continue;
            var event = events[i];

            if (event.isNormalPriority()) {
                for (var j = 0; j < 4; j++) {
                    this._passableTable[event.x][event.y][j] = undefined;
                }
            }
        }
    };


    // 移動可能範囲のルートチェック
    Game_Map.prototype.checkMovableArea = function (unit) {
        //移動範囲計算
        var move = unit._move;
        if (move == 0) return;
        this.moveArea(unit, move);
        move = move - 1;
        var a = [];
        a.push([unit.x, unit.y + 1, unit.x, unit.y, 0, '1', move]);
        a.push([unit.x - 1, unit.y, unit.x, unit.y, 1, '2', move]);
        a.push([unit.x + 1, unit.y, unit.x, unit.y, 2, '3', move]);
        a.push([unit.x, unit.y - 1, unit.x, unit.y, 3, '4', move]);
        while (a.length > 0) {
            var data = a.pop();
            var x = data[0];
            var y = data[1];
            var key = '' + x + ',' + y;
            if (this._passableTable[data[2]][data[3]][data[4]] &&
                (!this._area[key] || data[5].length <= this._area[key].length)) {
                this._area[key] = data[5];
                if (data[6] > 0) {
                    data[6] = data[6] - 1;
                    if (data[4] !== 3) a.push([x, y + 1, x, y, 0, data[5] + '1', data[6]]);
                    if (data[4] !== 2) a.push([x - 1, y, x, y, 1, data[5] + '2', data[6]]);
                    if (data[4] !== 1) a.push([x + 1, y, x, y, 2, data[5] + '3', data[6]]);
                    if (data[4] !== 0) a.push([x, y - 1, x, y, 3, data[5] + '4', data[6]]);
                }
            }
        }
    };

    // 範囲からすでにイベントがある座標を除外(多分使わない)
    Game_Map.prototype.deleteAreaOverlapEvent = function (unit) {
        var events = this._events;
        for (var i = 1; i < events.length; i++) {
            var event = events[i];
            if ((event.isNormalPriority() && !event.isThrough()) || !(event.event().id == unit.event().id)) {
                delete this._area['' + event.x + ',' + event.y];
            }
        }
    };

    // 移動できないエリアを除外
    Game_Map.prototype.deleteCantMoveArea = function (unit, type) {
        var keys = Object.keys(this._area);
        for (var i = 0, a; i < keys.length; i++) {
            a = keys[i].split(',').map(Number);
            var x = a[0];
            var y = a[1];
            //var check1 = (unit.isCollidedWithCharacters(x, y) && !(x == unit.x && y == unit.y)); //キャラが配置されてるエリアかチェック
            var check1 = (this.unitXy(x, y)); //キャラが配置されてるエリアかチェック
            var check2 = (!this.canMoveArea(x, y)); //this.terrainTag(x, y) == 1; //城、海などのエリアかチェック
            if (type == "move") {
                var check3 = (unit.findAreaTo(x, y) == 0); //キャラやオブジェクトの配置によって移動できないエリアかチェック(経路探索できてない)
                //var check6 = unit.cantMoveInvisibleArea() && !(x == unit.x && y == unit.y);//進行不可のバフフィールドに既に入っている場合移動不可//バランス考慮して領域外への移動は可能にしたいためコメントアウト
            }
            var check4 = (!(unit._actor.meetsSkillConditions($dataSkills[2])) && !(x == unit.x && y == unit.y));//そもそもドンムブなどで移動できない状態
            var check5 = (!unit.checkProceedInvisibleArea(x, y) && !(x == unit.x && y == unit.y));//進行不可のバフフィールドか

            //チェックされたエリアを削除
            if (type == "move") {
                if (check1 || check2 || check3 || check4 || check5) {// || check6){
                    delete this._area['' + x + ',' + y];
                }
            } else {
                if (check1 || check2 || check4 || check5) {
                    delete this._area['' + x + ',' + y];
                }
            }
        }
    };


    // 選択できない射程エリアを除外
    Game_Map.prototype.deleteCantRangeArea = function (unit) {
        var keys = Object.keys(this._area);
        /*
        var cantX = [];
        var cantY = [];
        var cantDifferenceX = [];
        var cantDifferenceY = [];
        var cantCos = [];
        */
        for (var i = 0, a; i < keys.length; i++) {
            a = keys[i].split(',').map(Number);
            var x = a[0];
            var y = a[1];
            var check = (!this.canMoveArea(x, y)); //this.terrainTag(x, y) == 1; //城、海などのエリアかチェック

            //チェックされたエリアを削除
            if (check) {
                delete this._area['' + x + ',' + y];
            }

            /* 壁越し攻撃を不可にするための処理（複雑で保留にするためコメントアウト）
            var differenceX = (x - unit.x);
            var differenceY = (y - unit.y);
            
            var h = Math.sqrt(Math.abs(differenceX) ^ 2 + Math.abs(differenceY) ^ 2);
            var cos = parseInt(Math.cos(x/h) * 10);
            //射程不可の軌道あって場合除外()
            for (var j = 0; j < cantCos.length; j++) {
              if((cantCos[j] == cos) && ((cantDifferenceX[j] >= 0 && differenceX >= 0 && cantDifferenceY[j] >= 0 && differenceY >= 0) || (cantDifferenceX[j] >= 0 && differenceX >= 0 && cantDifferenceY[j] < 0 && differenceY < 0) || (cantDifferenceX[j] < 0 && differenceX < 0 && cantDifferenceY[j] >= 0 && differenceY >= 0) || (cantDifferenceX[j] < 0 && differenceX < 0 && cantDifferenceY[j] < 0 && differenceY < 0))){
                delete this._area['' + x + ',' + y];
              }
            }
            //壁有で射程不可の場合、登録しておく(はじめは登録だけしておいて)
            if(this.terrainTag (x, y) == 3){
              cantX.push(x);
              cantY.push(y);
              cantDifferenceX.push(differenceX);
              cantDifferenceY.push(differenceY);
              cantCos.push(cos);
              delete this._area['' + x + ',' + y];
            }
            */
        }
    };

    // 効果範囲外のエリアを除外
    Game_Map.prototype.deleteCantEffectArea = function (unit) {
        var keys = Object.keys(this._area);
        for (var i = 0, a; i < keys.length; i++) {
            a = keys[i].split(',').map(Number);
            var x = a[0];
            var y = a[1];

            //delete this._area['' + x + ',' + y];
        }
    };

    // そのタイルに移動できるか
    Game_Map.prototype.canMoveArea = function (x, y) {
        if (!this.isPassable(x, y, 2) && !this.isPassable(x, y, 4) && !this.isPassable(x, y, 6) && !this.isPassable(x, y, 8)) {
            return false;
        } else {
            return true;
        }
    };

    // 待機範囲を表示する
    Game_Map.prototype.showWaitingArea = function (unit) {
        this._area = this.createArea(unit.x, unit.y, ['diamond', 1, 'rect', 0]);
        this.setColorArea(colorAreaWaiting);
    };

    // 指定座標に一番近い範囲の座標を返す
    Game_Map.prototype.posInsideAreaNearXy = function (x, y) {
        var result = null;
        var minValue = 1000;
        /*
        var targetEvent = this.unitXy(x, y, true);
        if (targetEvent) {
          // 指定座標にユニットがいればその背後の評価を高くする
          var bonusD = 10 - targetEvent.direction();
          var bonusX = this.xWithDirection(x, bonusD);
          var bonusY = this.yWithDirection(y, bonusD);
        }
        */
        for (var prop in this._area) {
            var pos = prop.split(',').map(Number);
            var d = Math.abs(x - pos[0]) + Math.abs(y - pos[1]);
            //if (pos[0] === bonusX && pos[1] === bonusY) d--; 
            if (d < minValue) {
                minValue = d;
                result = new Point(pos[0], pos[1]);
            }
        }
        return result;
    };

    // 指定座標から一番遠い範囲の座標を返す
    Game_Map.prototype.posInsideAreaFarXy = function (x, y) {
        var result = null;
        var maxValue = -1;
        for (var prop in this._area) {
            var pos = prop.split(',').map(Number);
            var d = Math.abs(x - pos[0]) + Math.abs(y - pos[1]);
            if (d > maxValue) {
                maxValue = d;
                result = new Point(pos[0], pos[1]);
            }
        }
        return result;
    };

    // 味方所定位置の検索
    Game_Map.prototype.searchAlly = function (index) {
        for (var i = 0; i < _unitList.length; i++) {
            if (this.unitList()[i].allyId == index) return this.unitList()[i];
        }
    };



    //-----------------------------------------------------------------------------
    // Game_Event
    //

    // SRPGバトラーを個別にセットアップ
    Game_Event.prototype.setBattler = function () {
        this._damagePopupDelay = null;
        this._useSkill = null; //これから使用するスキル
        this._myAbility = [];
        this._myAbility[0] = null; //ファーストアビリティ(MP消費)
        this._myAbility[1] = null; //セカンドアビリティ(MP消費)
        this._myAbility[2] = null; //バーストアビリティ(TP消費)

        this._alreadyCover = false; //かばう時にすでに庇ったかどうか
        this._allyCounterFlag = false; //連動式カウンターフラグ

        this._moved = false; //移動したかどうか
        this._acted = false; //行動したかどうか
        this._deadFlag = false;

        //移動先の座標
        this._fromX = 0;
        this._fromY = 0;
        this._fromD = 0;
        this._toX = 0; //移動先X座標
        this._toY = 0; //移動先Y座標

        var unitId;
        var allyId = this.allyNumber();
        var enemyId = this.enemyNumber();

        //this.setStepAnime(true); //足踏みアニメon
        this.setMoveSpeed(4);//移動速度を通常に設定

        //マップで複数パターンの配置があった場合
        var arrangePattern = this.event().meta.Arrange; //配置
        if (arrangePattern) {
            if (!$gameTemp._arrangePattern == arrangePattern) {
                return;
            }
        }
        //特定のイベントでの配置があった場合
        var variable = this.event().meta.Variable; //変数
        if (variable) {
            var value = this.event().meta.Value; //変数の値
            if (value) {
                if (!($gameVariables.value(variable) == value)) {
                    return;
                }
            }
        }
        if ($gameSwitches.value(15)) {
            if (allyId) {
                this.initTacticsUnitSetting();
                switch (parseInt(allyId)) {
                    case 0:
                        this._allyId = $gameVariables.value(ally1Id); //変数設定
                        break;
                    case 1:
                        this._allyId = $gameVariables.value(ally2Id); //変数設定
                        break;
                    case 2:
                        this._allyId = $gameVariables.value(ally3Id); //変数設定
                        break;
                    case 3:
                        this._allyId = $gameVariables.value(ally4Id); //変数設定
                        break;
                }
                this.setActor(new Game_Actor(this._allyId));

                this.isActor().setEventId(this.eventId()); //イベントと紐づける用
                this.isActor().initWt(allyId, enemyId);
                this._move = $dataClasses[this._actor._classId].meta.move; //移動力
                this.setImage(this._actor.characterName(), this._actor.characterIndex());
                //向きの設定
                var d = this.event().meta.Direction;
                if (d) this.setDirection(d);
                if (testMode) this._actor.gainTp(100);//テスト用
            }
            else if (enemyId) {
                this.initTacticsUnitSetting();
                switch (parseInt(enemyId)) {
                    case 0:
                        this._enemyId = $gameVariables.value(enemy1Id); //変数設定
                        break;
                    case 1:
                        this._enemyId = $gameVariables.value(enemy2Id); //変数設定
                        break;
                    case 2:
                        this._enemyId = $gameVariables.value(enemy3Id); //変数設定
                        break;
                    case 3:
                        this._enemyId = $gameVariables.value(enemy4Id); //変数設定
                        break;
                }
                this.setActor(new Game_Actor(this._enemyId));

                this.isActor().setEventId(this.eventId()); //イベントと紐づける用
                this.isActor().initWt(allyId, enemyId);
                this._move = $dataClasses[this._actor._classId].meta.move; //移動力
                this.setImage(this._actor.characterName(), this._actor.characterIndex());
                //向きの設定
                var d = this.event().meta.Direction;
                if (d) this.setDirection(d);
                this._actor.gainTp(100);//テスト用
            }
        } else {
            //味方の配置
            if (allyId) {
                this.initTacticsUnitSetting();
                if ($gameSystem.allyMembers()[parseInt(allyId)] <= 0) {
                    this._allyId = 0;
                    do {
                        this._allyId = parseInt(Math.floor(Math.random() * ($gameSystem.selectMembers().length - 2) + 1));
                    } while ($gameSystem.allyMembers().indexOf(this._allyId) >= 0);
                    $gameSystem.allyMembers()[parseInt(allyId)] = this._allyId;
                } else {
                    this._allyId = $gameSystem.allyMembers()[parseInt(allyId)];
                }
                switch (parseInt(allyId)) {
                    case 0:
                        $gameVariables.setValue(ally1Id, this._allyId); //変数設定
                        break;
                    case 1:
                        $gameVariables.setValue(ally2Id, this._allyId); //変数設定
                        break;
                    case 2:
                        $gameVariables.setValue(ally3Id, this._allyId); //変数設定
                        break;
                    case 3:
                        $gameVariables.setValue(ally4Id, this._allyId); //変数設定
                        break;
                }
                this.setActor(new Game_Actor(this._allyId));

                this.isActor().setEventId(this.eventId()); //イベントと紐づける用
                this.isActor().initWt(allyId, enemyId);
                this._move = $dataClasses[this._actor._classId].meta.move; //移動力
                this.setImage(this._actor.characterName(), this._actor.characterIndex());
                //向きの設定
                var d = this.event().meta.Direction;
                if (d) this.setDirection(d);
                if (Utils.isOptionValid('test')) this._actor.gainTp(100);//テスト用
            }
            //敵の配置
            else if (enemyId) {
                this.initTacticsUnitSetting();
                if ($gameSystem.enemyMembers()[parseInt(enemyId)] <= 0) {
                    this._enemyId = 0;
                    do {
                        this._enemyId = parseInt(Math.floor(Math.random() * ($gameSystem.selectMembers().length - 2) + 1));
                    } while ($gameSystem.enemyMembers().indexOf(this._enemyId) >= 0);
                    $gameSystem.enemyMembers()[parseInt(enemyId)] = this._enemyId;
                } else {
                    this._enemyId = $gameSystem.enemyMembers()[parseInt(enemyId)];
                }

                switch (parseInt(enemyId)) {
                    case 0:
                        $gameVariables.setValue(enemy1Id, this._enemyId); //変数設定
                        break;
                    case 1:
                        $gameVariables.setValue(enemy2Id, this._enemyId); //変数設定
                        break;
                    case 2:
                        $gameVariables.setValue(enemy3Id, this._enemyId); //変数設定
                        break;
                    case 3:
                        $gameVariables.setValue(enemy4Id, this._enemyId); //変数設定
                        break;
                }
                this.setActor(new Game_Actor(this._enemyId));

                this.isActor().setEventId(this.eventId()); //イベントと紐づける用
                this.isActor().initWt(allyId, enemyId);
                this._move = $dataClasses[this._actor._classId].meta.move; //移動力
                this.setImage(this._actor.characterName(), this._actor.characterIndex());
                //向きの設定
                var d = this.event().meta.Direction;
                if (d) this.setDirection(d);
                if (Utils.isOptionValid('test')) this._actor.gainTp(100);//テスト用
            }
        }
    };
    // ユニット蘇生
    Game_Event.prototype.resurrectionUnit = function () {
        this.isActor().recoverAll();
        this.isActor().clearTp();
        this.setTransparent(false);
        this.setThrough(false);
        this._deadFlag = false;
        $gameSystem.setUnitList($gameMap.events());
    };
    // ターゲットを返す
    Game_Event.prototype.target = function () {
        //return this._target;
        if (this._target) return $gameMap.event(this._target);
        else return null;
    };
    // 使用スキルを返す
    Game_Event.prototype.useSkill = function () {
        //return this._useSkill;
        if (this._useSkill) return $dataSkills[this._useSkill];
        else return null;
    };
    // ターゲットをセットする
    Game_Event.prototype.setTarget = function (target) {
        //this._target = target;
        if (target) this._target = target.event().id
        else this._target = null;
    };
    // 使用スキルをセットする
    Game_Event.prototype.setUseSkill = function (skill) {
        //this._useSkill = skill;
        if (skill) this._useSkill = skill.id;
        else this._useSkill = null;
    };

    // 移動元座標を記憶する
    Game_Event.prototype.setFromXy = function (x, y, d) {
        this._fromX = x;
        this._fromY = y;
        this._fromD = d;
    };
    // 移動元座標に戻す
    Game_Event.prototype.returnFromXy = function () {
        this.setPosition(this.fromX(), this.fromY());
        this.setDirection(this.fromD());
        //以下オンライン用
        if ($gameSwitches.value(15)) {
            this.setToXy(this.fromX(), this.fromY());
            $gameSystem.sendInfo(); //オンライン時の処理(送信は間開けた方がいい？)
            $gameSwitches.setValue(23, true);//移動選択フラグ
        }
    };
    // 移動先座標を記憶する
    Game_Event.prototype.setToXy = function (x, y) {
        this._toX = x;
        this._toY = y;
    };
    // 移動元座標Xの情報
    Game_Event.prototype.fromX = function () {
        return this._fromX;
    };
    // 移動元座標Xの情報
    Game_Event.prototype.fromY = function () {
        return this._fromX;
    };
    // 移動元座標Xの情報
    Game_Event.prototype.fromY = function () {
        return this._fromY;
    };
    // 移動元座標の情報
    Game_Event.prototype.fromD = function () {
        return this._fromD;
    };
    // 移動先座標Xの情報
    Game_Event.prototype.toX = function () {
        return this._toX;
    };
    // 移動先座標Yの情報
    Game_Event.prototype.toY = function () {
        return this._toY;
    };

    Game_Event.prototype.allyNumber = function () {
        return this.event().meta.Ally;
    };
    Game_Event.prototype.enemyNumber = function () {
        return this.event().meta.Enemy;
    };
    // 攻撃時のアニメ設定
    Game_Event.prototype.setBattlerAttack = function () {
        /*
        this.resetPattern();
        this.setImage(this._actor.characterName(), 2);
        */
        $gameTemp._attacktime = true;
    };
    // 攻撃時のアニメ設定
    Game_Event.prototype.setBattlerReturn = function () {
        this.setImage(this._actor.characterName(), 0);
    };
    //初期化？
    Game_Event.prototype.initTacticsUnitSetting = function () {
        this.refresh();
        this.setPriorityType(1);
    };

    //戦闘不能時の処理
    Game_Event.prototype.setDeadBattler = function () {
        this.setTransparent(true); //透明化
        this.setThrough(true); //すり抜け
        //this.erase(); //敵の場合だけにしたい
    };

    // イベントが水上移動可能状態かどうかを返す
    Game_Event.prototype.isShip = function () {
        return this.isActor().unitFlag('shipMove');
    };

    // イベントが浮遊移動状態かどうかを返す
    Game_Event.prototype.isFloat = function () {
        return this.isActor().unitFlag('floatMove');
    };

    // イベントが移動可能かどうかを返す
    Game_Event.prototype.canMove = function () {
        return !this._moved;
    };

    // イベントの移動を終了する
    Game_Event.prototype.endMove = function () {
        this._moved = true;
    };

    // イベントの移動状態をリセットする
    Game_Event.prototype.resetMove = function () {
        this._moved = false;
    };

    // イベントが行動可能かどうかを返す
    Game_Event.prototype.canAction = function () {
        return !this._acted;
    };

    // イベントの行動を終了する
    Game_Event.prototype.endAction = function () {
        this._acted = true;
        //this.clearLastPosition();     // 移動前の座標情報をクリア
    };

    // イベントの行動状態をリセットする
    Game_Event.prototype.resetAction = function () {
        this._acted = false;
    };


    // 行動のアニメーションを表示
    Game_Event.prototype.showActionAnimation = function (turnUnit, skill) {
        //var subject = this.isActor();
        var subject = turnUnit.isActor();

        //subject.clearActions();
        //var action = new Game_Action(subject);//Enemyだとundefindでエラーが起こる
        //action.setItemObject(skill);
        //action = subject.currentAction(); //undefindエラー発生するGame_Actionに対する勉強不足(skill使用時に設定している可能性)
        var animationId = subject.actionAnimationId(skill);
        //subject.useItem(item);      // 指定アニメーションの開始
        this.requestAnimation(animationId);//これは正常
        //subject.requestAnimation(animationId);//ここでエラー

    };

    // 行動の実行
    Game_Event.prototype.executeAction = function () {
        var subject = this.isActor();
        var action = subject.currentAction();
        if (!action) {
            subject.makeActions();
            action = subject.currentAction();
            console.log("executeAction");
            SoundManager.playBuzzer();//ブザー
            return;
        }
        actor.clearResult(); //攻撃しながらバフつける系の不具合対策用
        //var checkFlag = action.isSkill() || action.isItem();// && action.item().id === checkSkillId; //isSkillでエラー発生(Enemyだとundefind)
        var targets = $gameMap.unitsArea($gameMap._targetArea, true); //対象とその周囲を設定
        //対象にチャーム付与者がいた場合、攻撃中止する
        if (this.effectLieCryingCheck(targets)) {
            console.log("effectLieCryingCheck");
            SoundManager.playBuzzer();//ブザー
            if ($gameSwitches.value(15)) {
                if ($gameSystem.isSyncTurn()) $gameSwitches.setValue(28, false);
                else $gameSwitches.setValue(28, true);
            }
            return;
        }

        for (var i = 0; i < targets.length; i++) {
            var target = null;
            //回復魔法は敵に適用させず、攻撃は味方に適用させない
            //攻撃スキル(対象が敵)の場合
            if (this.useSkill().scope == 1 || this.useSkill().scope == 2) {
                if (this.isAttackTarget(targets[i])) {
                    //まふうけんバフフィールド内に入っているかチェック
                    //領域内に入ってかつ魔法攻撃であった場合ターゲットをまふうけん付与者に切り替える
                    var receiveUnit = targets[i].receiveArea(action.isMagical());
                    if (receiveUnit) targets[i] = receiveUnit;
                    //かばう系のバフを所有している場合
                    var coverUnit = targets[i].inCoverArea(this, targets);
                    if (coverUnit) targets[i] = coverUnit;
                    //ダメージ無効エリアチェック(CPU用?)
                    if (this.checkInvalidArea(targets[i])) {
                        console.log("checkInvalidArea");
                        SoundManager.playBuzzer();//ブザー
                        continue;
                    }
                    //リフレクターチェック
                    if (this.checkReflector(targets[i], this.useSkill(), action)) {
                        console.log("checkReflector");
                        SoundManager.playBuzzer();//ブザー
                        continue;
                    }
                    //以降は普通
                    target = targets[i].isActor();
                }
            } else if (this.useSkill().scope == 7 || this.useSkill().scope == 8 || this.useSkill().scope == 11) {
                //回復系のスキル(対象が味方)の場合
                //対象が味方の場合
                if (this.isCoverTarget(targets[i])) target = targets[i].isActor();
            }

            //ターゲットではない場合以降の処理を終了し次のループへ移行する
            if (!target) continue;
            //対象が戦闘不能状態の場合も次のループへ
            if (target.isDead()) continue;
            action.actionApply(target);
            this.reserveDamagePopup(0);
            targets[i].reserveDamagePopup(0);
            //targets[i].reserveDamagePopup(i * damagePopupInterval);

            if ($gameTemp.lastMultiHit()) {
                if (!$gameTemp.isReservationActionTurn()) {
                    //味方のカウンターチェック
                    this.checkAllyCounter(targets[i]);
                    //カウンターチェック
                    this.checkCounter(targets[i], action);
                }
                //targets[i].checkDead();//戦闘不能チェック
            }
            targets[i].checkDead();//戦闘不能チェック
        }
        //デバフ消去処理
        if (this.useSkill().meta.throw) {
            if (this.useSkill().meta.throw == "debuff") {
                this.isActor().removeDebuffState(true);
            }
        }

        //以下メモ欄に記載されたタグ処理(敵に攻撃したあと味方にバフや回復を行いたいとき、味方全体に回復を行った後に自身にバフをつけたい場合の処理)
        var target = this.useSkill().meta.target;
        //対象が自身であった場合
        if (target == "self" && $gameTemp.lastMultiHit() && !($gameTemp.isReservationActionType("reflector") && $gameTemp.isReservationActionTurn())) {
            var actor = this.isActor();
            //ステート追加処理
            var state = this.useSkill().meta.state;
            if (state) {
                if (parseInt(state) == 1) this._deadFlag = true;
                actor.addState(this.event().id, state);
            }
            //HP回復処理
            var gainHp = this.useSkill().meta.gainHp;
            if (gainHp) actor.gainHp(Math.round(actor.mhp * gainHp / 100));
            //MP回復処理
            var gainMp = this.useSkill().meta.gainMp;
            if (gainMp) actor.gainMp(Math.round(actor.mmp * gainMp / 100));
            //TP回復処理
            var gainTp = this.useSkill().meta.gainTp;
            if (gainTp) actor.gainTp(Math.round(actor.maxTp() * gainTp / 100));

            this.reserveDamagePopup(0);//回復時被ダメージ時のポップアップ表示

            //HP変更
            if (this.useSkill().meta.Hp) {
                var Hp = Math.max(actor.hp - actor.mhp * parseInt(this.useSkill().meta.Hp) / 100, 1);
                actor.setHp(Hp);
            }

            //その他、ダメージなどの処理も入れる予定
            //action.actionApply(this, target);
            //targets[i].reserveDamagePopup(i * damagePopupInterval);
        } else if (target == "ally" && $gameTemp.lastMultiHit() && !($gameTemp.isReservationActionType("reflector") && $gameTemp.isReservationActionTurn())) {
            //対象が味方であった場合
            for (var i = 0; i < targets.length; i++) {
                var actor = null;
                if (this.isCoverTarget(targets[i])) actor = targets[i].isActor();
                //ターゲットではない場合以降の処理を終了し次のループへ移行する
                if (!actor) continue;
                //対象が戦闘不能状態の場合も次のループへ
                if (actor.isDead()) continue;
                //ステート追加処理
                var state = this.useSkill().meta.state;
                if (state) actor.addState(this.event().id, state);
                //デバフ消去処理
                if (this.useSkill().meta.clear) {
                    if (this.useSkill().meta.clear == "allyDebuff") {
                        actor.removeDebuffState();
                    }
                }
                //HP回復処理
                var gainHp = this.useSkill().meta.gainHp;
                if (gainHp) actor.gainHp(Math.round(actor.mhp * gainHp / 100));
                //MP回復処理
                var gainMp = this.useSkill().meta.gainMp;
                if (gainMp) actor.gainMp(Math.round(actor.mmp * gainMp / 100));
                //TP回復処理
                var gainTp = this.useSkill().meta.gainTp;
                if (gainTp) actor.gainTp(Math.round(actor.maxTp() * gainTp / 100));
                //MP→TP変換
                if (this.useSkill().meta.convertTp) {
                    if (this.useSkill().meta.convertTp == "mp") {
                        actor.gainTp(this.isActor().mp);
                        this.isActor().setMp(0);
                    }
                }
                targets[i].reserveDamagePopup(0);//回復時被ダメージ時のポップアップ表示
            }
        }
        if ($gameTemp.lastMultiHit()) {
            if (!$gameTemp.isReservationActionTurn()) {
                //追撃チェック
                this.target().checkTrapChase();
                this.checkChase(this.target());
                this.checkAllyChase(this.target());
            }

            //既存の処理
            this.endAction();
            //獲得TPについて
            if (!$gameTemp.isReservationActionTurn()) {
                action.applyItemUserEffect(); //指定対象にアイテムの効果を適用(TP獲得のため)。
                subject.paySkillCost(this.useSkill()); //MPTP消費
            }
        }
        subject.onAllActionsEnd();
    };


    // 遅延デバフチェック
    Game_Event.prototype.checkDelay = function () {
        for (var id = 1; id < $dataStates.length; id++) {
            if (this.isActor().isStateAffected(id)) {
                var delay = $dataStates[id].meta.delay;
                if ($dataStates[id].meta.delay) return $dataStates[id].meta.delay;
            }
        }
        return;
    };

    // トラップ追撃チェック
    Game_Event.prototype.checkTrapChase = function () {
        var actor = this.isActor();
        for (var id = 1; id < $dataStates.length; id++) {
            if (this.isActor().isStateAffected(id)) {
                if ($dataStates[id].meta.activate) {
                    if ($dataStates[id].meta.activate == "trap" && $dataStates[id].meta.trapChase) {
                        var skill = $dataStates[id].meta.skill;
                        var trapGrantor = $dataStates[id].meta.trapGrantor;
                        //マップ上にいるユニットのステートをチェックする
                        for (var j = 0; j < $gameSystem.unitList().length; j++) {
                            var trapGrantorUnit = $gameSystem.unitList()[j];
                            var trapGrantorActor = trapGrantorUnit.isActor();
                            //if ((trapGrantorActor._classId == parseInt(trapGrantor)) && trapGrantorUnit.isAttackTarget(this)) {
                            if (actor.checkStateGrantorId(trapGrantorActor.eventId(), id)) {
                                $gameTemp.addReservationActionList(trapGrantorUnit, $dataSkills[parseInt(skill)], this, "trapChase");
                                //return;
                            }
                        }
                    }
                }
            }
        }
    };

    // 追撃チェック
    Game_Event.prototype.checkChase = function (target) {
        var actor = target.isActor();
        for (var id = 1; id < $dataStates.length; id++) {
            if (this.isActor().isStateAffected(id)) {
                if ($dataStates[id].meta.activate && this.isAttackTarget(target)) {
                    if ($dataStates[id].meta.activate == "chase" || $dataStates[id].meta.activate == "chaseCounter" || $dataStates[id].meta.activate == "chaseInvasion") {
                        var skill = $dataStates[id].meta.skill;
                        if (skill == "same") {
                            $gameTemp.addReservationActionList(this, this.useSkill(), target, "chase");
                        } else {
                            $gameTemp.addReservationActionList(this, $dataSkills[parseInt(skill)], target, "chase");
                        }
                        //return;         
                    }
                }
            }
        }
    };

    // 反撃チェック
    Game_Event.prototype.checkCounter = function (target, action) {
        var actor = target.isActor();
        //相手がカウンター持ちか
        for (var id = 1; id < $dataStates.length; id++) {
            if (actor.isStateAffected(id)) {
                var field = $dataStates[id].meta.field;
                if (field && $dataStates[id].meta.activate && target.isAttackTarget(this) && target.targetIsInvalid(this)) {
                    if ((this.targetRange(target) <= parseInt(field)) && ($dataStates[id].meta.activate == "counter" || $dataStates[id].meta.activate == "chaseCounter")) {
                        var skill = $dataStates[id].meta.skill;
                        if (skill == "impersonation") { //ものまね時
                            $gameTemp.addReservationActionList(target, this.useSkill(), this, "counter");
                        } else if (skill == "magicCounter" && action.isMagical()) {
                            $gameTemp.addReservationActionList(target, this.useSkill(), this, "counter");
                        } else if (skill == "shift") {
                            target.isActor().wtTurnAdvance();
                        } else {
                            $gameTemp.addReservationActionList(target, $dataSkills[parseInt(skill)], this, "counter");
                        }
                        //return;
                    }
                }
            }
        }
    };

    // 反射チェック(全体魔法を反射するところにバグあり)
    Game_Event.prototype.checkReflector = function (target, skill, action) {
        var actor = target.isActor();
        //相手がリフレク持ちか
        for (var id = 1; id < $dataStates.length; id++) {
            if (actor.isStateAffected(id)) {
                if ($dataStates[id].meta.activate) {
                    if ($dataStates[id].meta.activate == "reflector") {
                        if (($dataStates[id].meta.reflectType == "physical" && action.isPhysical()) || ($dataStates[id].meta.reflectType == "magical" && action.isMagical())) {
                            if ($gameTemp.lastMultiHit() && !$gameTemp.isReservationActionTurn()) $gameTemp.addReservationActionList(target, skill, this, "reflector");
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };

    // 味方による追撃チェック
    Game_Event.prototype.checkAllyChase = function (target) {
        //マップ上にいるユニットのバフフィールド侵入チェック
        for (var i = 0; i < $gameSystem.unitList().length; i++) {
            var allyChaseUnit = $gameSystem.unitList()[i];
            var allyChaseUnitActor = allyChaseUnit.isActor();

            for (var id = 1; id < $dataStates.length; id++) {
                if (allyChaseUnitActor.isStateAffected(id)) {
                    var field = $dataStates[id].meta.field;
                    if (field) {
                        //if((this.targetRange(allyChaseUnit) <= parseInt(field)) && (target.targetRange(allyChaseUnit) <= parseInt(field))){
                        if (target.targetRange(allyChaseUnit) <= parseInt(field)) {
                            //バフフィールド内侵入していた場合追撃発生する
                            if ($dataStates[id].meta.activate && allyChaseUnit.isAttackTarget(target) && this.isAttackTarget(target)) {
                                if ($dataStates[id].meta.activate == "allyChase" || $dataStates[id].meta.activate == "freeFight") {
                                    $gameTemp.addReservationActionList(allyChaseUnit, $dataSkills[parseInt($dataStates[id].meta.skill)], target, "allyChase");
                                    //return;
                                }
                            }
                        }
                    }
                }
            }
        }
    };

    // 味方による反撃チェック
    Game_Event.prototype.checkAllyCounter = function (target) {
        //マップ上にいるユニットのバフフィールド侵入チェック
        for (var i = 0; i < $gameSystem.unitList().length; i++) {
            var allyCounterUnit = $gameSystem.unitList()[i];
            var allyCounterUnitActor = allyCounterUnit.isActor();
            if (allyCounterUnit._allyCounterFlag) continue; //既にカウンター成立している場合、以降の処理は行わない
            for (var id = 1; id < $dataStates.length; id++) {
                if (allyCounterUnitActor.isStateAffected(id)) {
                    var field = $dataStates[id].meta.field;
                    if (field) {
                        //if((this.targetRange(allyCounterUnit) <= parseInt(field)) && (target.targetRange(allyCounterUnit) <= parseInt(field))){
                        if (target.targetRange(allyCounterUnit) <= parseInt(field)) { //味方が領域内に入っていれば、敵が領域外でもカウンターが発動する
                            //バフフィールド内侵入していた場合反撃発生する
                            if ($dataStates[id].meta.activate && allyCounterUnit.isCoverTarget(target) && allyCounterUnit.isAttackTarget(this) && allyCounterUnit.targetIsInvalid(this)) {
                                if ($dataStates[id].meta.activate == "allyCounter" || $dataStates[id].meta.activate == "freeFight") {
                                    if ($dataStates[id].meta.skill == "shift") {
                                        allyCounterUnitActor.wtTurnAdvance();
                                    } else {
                                        $gameTemp.addReservationActionList(allyCounterUnit, $dataSkills[parseInt($dataStates[id].meta.skill)], this, "allyCounter");
                                        allyCounterUnit._allyCounterFlag = true;
                                    }
                                    //return;
                                }
                            }
                        }
                    }
                }
            }
        }
    };


    // 通常スキル変化チェック
    Game_Event.prototype.checkSpecialSkill = function () {
        var actor = this.isActor();
        //相手がカウンター持ちか
        for (var id = 1; id < $dataStates.length; id++) {
            if (actor.isStateAffected(id)) {
                if ($dataStates[id].meta.specialSkill) {
                    return parseInt($dataStates[id].meta.specialSkill);
                }
            }
        }
        return;
    };

    //ターン開始前の処理
    Game_Event.prototype.beforeTurnStart = function () {
        var actor = this.isActor();
        actor.clearResult();
        //actor.onTurnEnd(); //この処理だとバフターンの仕様がおかしくなる

        $gameSystem._moveTargetPointFlag = false
        $gameSystem._moveTargetPointX = 0;
        $gameSystem._moveTargetPointY = 0;
        $gameSystem._resurrectionFlag = false
        $gameSystem.resetResurrectionUnit();

        //可視バフデバフ処理
        for (var id = 1; id < $dataStates.length; id++) {
            if (actor.isStateAffected(id)) {
                var slipGrantor = $dataStates[id].meta.slipGrantor;
                //スリップの処理
                if (slipGrantor) {
                    for (var i = 0; i < $gameSystem.unitList().length; i++) {
                        var target = $gameSystem.unitList()[i];
                        var targetActor = target.isActor();
                        //if ((targetActor._classId == parseInt(slipGrantor)) && this.isHostileUnit(target)) {
                        if (actor.checkStateGrantorId(targetActor.eventId(), id)) {
                            var gainHp = targetActor.mhp - targetActor.hp;//最大HP-HP(被ダメージ分のHP)
                            if (gainHp > actor.hp) {
                                gainHp = actor.hp - 1;
                            }
                            actor.gainHp(-gainHp);
                            targetActor.gainHp(gainHp);
                            target.reserveDamagePopup(0);//ポップアップ表示
                            this.reserveDamagePopup(0);//リジェネ効果のポップアップ表示
                            break;
                        }
                    }
                }
            }
        }
    };

    //ターン終了後の処理
    Game_Event.prototype.afterTurnEnd = function () {
        var actor = this.isActor();
        actor.regenerateAll();//この処理でリジェネや毒を発生させる
        this.reserveDamagePopup(0);//リジェネ効果のポップアップ表示
        if ($gameSystem._quickTurnUnit == this) {
            $gameSystem._quickTurnUnit = null;
        } else {
            actor.resetWt(this.checkBehavioralLoad());
        }

        //自身のステートチェック
        for (var id = 1; id < $dataStates.length; id++) {
            if (actor.isStateAffected(id)) {
                //行動負荷なしのバフを持っているか
                if ($dataStates[id].meta.shift) {
                    if ($dataStates[id].meta.shift == "self") {
                        this.isActor().wtTurnAdvance();
                    }
                }
                //追跡でバフチェック
                var traceGrantor = $dataStates[id].meta.traceGrantor; //オンライン対戦時undefinedになる不具合(syncStateのタイミングが悪く消されたあとだから認識されない可能性)
                if (traceGrantor) {
                    //マップ上にいるユニットのステートをチェックする
                    for (var j = 0; j < $gameSystem.unitList().length; j++) {
                        var traceGrantorUnit = $gameSystem.unitList()[j];
                        var traceGrantorActor = traceGrantorUnit.isActor();
                        //if (parseInt(traceGrantor) == traceGrantorActor._classId) traceGrantorActor.wtTurnAdvance();
                        if (actor.checkStateGrantorId(traceGrantorActor.eventId(), id)) traceGrantorActor.wtTurnAdvance();
                    }
                }
                //行動終了後発動するスキルのあるバフデバフを持っているか
                if ($dataStates[id].meta.activate) {
                    if ($dataStates[id].meta.activate == "trap") {
                        //聖櫃トラップデバフ絡み
                        var trapGrantor = $dataStates[id].meta.trapGrantor;
                        if (trapGrantor) {
                            if (trapGrantor == "self") { //トラップを付与されたキャラのステータス依存のトラップ(味方全体に効果が及ぶようにするとエラーが起こる)
                                $gameTemp.addReservationActionList(this, $dataSkills[parseInt($dataStates[id].meta.skill)], this, $dataStates[id].meta.activate);
                            } else {
                                //マップ上にいるユニットのステートをチェックする
                                for (var j = 0; j < $gameSystem.unitList().length; j++) {
                                    var trapGrantorUnit = $gameSystem.unitList()[j];
                                    var trapGrantorActor = trapGrantorUnit.isActor();
                                    var trapGrantorIsArea = false;
                                    //if ((trapGrantorActor._classId == parseInt(trapGrantor)) && trapGrantorUnit.isAttackTarget(this)) {
                                    if (actor.checkStateGrantorId(trapGrantorActor.eventId(), id)) {
                                        if ($dataStates[id].meta.skill == "impersonation") {
                                            if (this.useSkill().scope == 1 || this.useSkill().scope == 2) {
                                                $gameTemp.addReservationActionList(trapGrantorUnit, this.useSkill(), this, $dataStates[id].meta.activate);
                                            } else if (this.useSkill().scope == 7 || this.useSkill().scope == 8 || this.useSkill().scope == 11) {
                                                $gameTemp.addReservationActionList(trapGrantorUnit, this.useSkill(), trapGrantorUnit, $dataStates[id].meta.activate);
                                            }
                                        } else {
                                            $gameTemp.addReservationActionList(trapGrantorUnit, $dataSkills[parseInt($dataStates[id].meta.skill)], this, $dataStates[id].meta.activate);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    //行動終了後の追撃判定
                    if (($dataStates[id].meta.activate == "afterChase" || $dataStates[id].meta.activate == "afterChaseInvasion") && $dataStates[id].meta.field) {
                        //マップ上にいるユニットのステートをチェックする
                        for (var j = 0; j < $gameSystem.unitList().length; j++) {
                            var fieldUnit = $gameSystem.unitList()[j];
                            var field = $dataStates[id].meta.field;
                            if (this.targetRange(fieldUnit) <= parseInt(field) && fieldUnit.isAttackTarget(this)) {
                                $gameTemp.addReservationActionList(this, $dataSkills[parseInt($dataStates[id].meta.skill)], fieldUnit, $dataStates[id].meta.activate);
                                break;
                            }
                        }
                    }
                }

            }
        }

        //マップ上にいるユニットのステートおよびバフフィールド侵入チェック
        for (var i = 0; i < $gameSystem.unitList().length; i++) {
            var checkUnit = $gameSystem.unitList()[i];
            var checkActor = checkUnit.isActor();
            for (var id = 1; id < $dataStates.length; id++) {
                if (checkActor.isStateAffected(id)) {
                    var field = $dataStates[id].meta.field;
                    if (field) {
                        if (this.targetRange(checkUnit) <= parseInt(field)) {
                            //領域内の味方を回復するタイプ
                            var state = $dataStates[id];
                            var gainHp = state.meta.gainHp;
                            if (gainHp) {
                                if (parseInt(-gainHp) > actor.hp) {
                                    gainHp = actor.hp - 1;
                                }
                                if (parseInt(gainHp) > 0 && checkUnit.isCoverTarget(this)) {
                                    actor.gainHp(Math.round(actor.mhp * parseInt(gainHp) / 100));
                                    this.reserveDamagePopup(0);//リジェネ効果のポップアップ表示
                                }
                                if (parseInt(gainHp) < 0 && checkUnit.isAttackTarget(this)) {
                                    actor.gainHp(Math.round(actor.mhp * parseInt(gainHp) / 100));
                                    this.reserveDamagePopup(0);//リジェネ効果のポップアップ表示
                                }
                            }
                            var gainMp = state.meta.gainMp;
                            if (gainMp) {
                                if (parseInt(gainMp) > 0 && checkUnit.isCoverTarget(this)) {
                                    actor.gainMp(Math.round(actor.mmp * parseInt(gainMp) / 100));
                                    this.reserveDamagePopup(0);//リジェネ効果のポップアップ表示
                                }
                                if (parseInt(gainMp) < 0 && checkUnit.isAttackTarget(this)) {
                                    actor.gainMp(Math.round(actor.mmp * parseInt(gainMp) / 100));
                                    this.reserveDamagePopup(0);//リジェネ効果のポップアップ表示
                                }
                            }
                            //バフフィールド内侵入でアビリティが発動するタイプ
                            if ($dataStates[id].meta.activate && checkUnit.isAttackTarget(this) && checkUnit.targetIsInvalid(this)) {//this.isEnemy()){
                                if ($dataStates[id].meta.activate == "invasion" || $dataStates[id].meta.activate == "chaseInvasion" || $dataStates[id].meta.activate == "afterChaseInvasion" || $dataStates[id].meta.activate == "freeFight") {
                                    if ($dataStates[id].meta.skill == "shift") {
                                        checkActor.wtTurnAdvance();
                                    } else {
                                        $gameTemp.addReservationActionList(checkUnit, $dataSkills[parseInt($dataStates[id].meta.skill)], this, $dataStates[id].meta.activate);
                                    }
                                }
                            }
                        }
                    }
                    var shiftGrantor = $dataStates[id].meta.shiftGrantor;
                    if (shiftGrantor) {
                        //if (parseInt(shiftGrantor) == actor._classId) checkActor.wtTurnAdvance();
                        if (checkActor.checkStateGrantorId(actor.eventId(), id)) checkActor.wtTurnAdvance();
                    }
                }
            }
        }
        this.resetMove();
        this.resetAction();
        if (this._deadFlag) {
            actor.addState(this.event().id, 1);
            this.checkDead();
        }
        if ($gameSwitches.value(15)) {
            if ($gameSystem.isSyncTurn()) $gameSystem.syncState();
            else actor.updateStateTurns(); //バフ期間1act減少
        } else {
            actor.updateStateTurns(); //バフ期間1act減少
        }
    };

    //行動負荷バフチェック
    Game_Event.prototype.checkBehavioralLoad = function () {
        var actor = this.isActor();
        //自身のステートチェック
        for (var id = 1; id < $dataStates.length; id++) {
            if (actor.isStateAffected(id)) {
                //行動負荷絡みバフを持っているか
                if ($dataStates[id].meta.behavioralLoad) {
                    switch ($dataStates[id].meta.behavioralLoad) {
                        case "row":
                            return 50;
                            break;
                        case "high":
                            return -50;
                            break;
                    }
                }
            }
        }
        //スキルに行動負荷があるか
        if (this.useSkill()) {
            if (this.useSkill().meta.behavioralLoad) {
                switch (this.useSkill().meta.behavioralLoad) {
                    case "row":
                        return 50;
                        break;
                    case "high":
                        return -50;
                        break;
                }
            }
        }
        return 0;
    };

    // 進行不可のバフフィールドに入れるか
    Game_Event.prototype.checkProceedInvisibleArea = function (x, y) {
        var unitList = $gameSystem.unitList();
        for (var i = 0; i < unitList.length; i++) {
            var target = unitList[i];
            if (target.isCoverTarget(this)) continue; //自身が敵で敵が作成した領域に入っても影響ないのでスルーする
            var targetActor = target.isActor();
            for (var id = 1; id < $dataStates.length; id++) {
                if (targetActor.isStateAffected(id)) {
                    var field = $dataStates[id].meta.field;
                    var move = $dataStates[id].meta.move;
                    if (field && move) {
                        if (move == "cantProceed") {
                            if (target.xyRange(x, y) <= parseInt(field)) {
                                return false;
                            }
                        }
                    }
                }
            }
        }
        return true;
    };

    // 進行不可のバフフィールドに入っているか
    Game_Event.prototype.checkInInvisibleArea = function () {
        var unitList = $gameSystem.unitList();
        for (var i = 0; i < unitList.length; i++) {
            var target = unitList[i];
            if (target.isAttackTarget(this)) continue; //敵対関係だったら関係ないのでスルー
            var targetActor = target.isActor();
            for (var id = 1; id < $dataStates.length; id++) {
                if (targetActor.isStateAffected(id)) {
                    var field = $dataStates[id].meta.field;
                    var move = $dataStates[id].meta.move;
                    if (field && move) {
                        if (move == "cantProceed") {
                            if (target.targetRange(this) <= parseInt(field)) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
        return false;
    };
    // 既に進行不可のバフフィールドに入っているか
    Game_Event.prototype.cantMoveInvisibleArea = function () {
        var unitList = $gameSystem.unitList();
        for (var i = 0; i < unitList.length; i++) {
            var target = unitList[i];
            if (target.isCoverTarget(this)) continue; //自身が敵で敵が作成した領域に入っても影響ないのでスルーする
            var targetActor = target.isActor();
            for (var id = 1; id < $dataStates.length; id++) {
                if (targetActor.isStateAffected(id)) {
                    var field = $dataStates[id].meta.field;
                    var move = $dataStates[id].meta.move;
                    if (field && move) {
                        if (move == "cantProceed") {
                            if (target.targetRange(this) <= parseInt(field)) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
        return false;
    };

    // レシーブエリアに入っているか
    Game_Event.prototype.receiveArea = function (useMagic) {
        var unitList = $gameSystem.unitList();
        for (var i = 0; i < unitList.length; i++) {
            var target = unitList[i];
            if (!target.isCoverTarget(this)) continue; //
            var targetActor = target.isActor();
            for (var id = 1; id < $dataStates.length; id++) {
                if (targetActor.isStateAffected(id)) {
                    var field = $dataStates[id].meta.field;
                    var activate = $dataStates[id].meta.activate;
                    var absorption = $dataStates[id].meta.absorption;
                    if (field && activate) {
                        if ((activate == "receiveMagic" && useMagic) || activate == "receive") {
                            if (target.targetRange(this) <= parseInt(field)) {
                                return target;
                            }
                        }
                    }
                }
            }
        }
        return;// this.isActor();
    };

    // かばうエリアに入っているか
    Game_Event.prototype.inCoverArea = function (attacker, targets) {
        var unitList = $gameSystem.unitList();
        for (var i = 0; i < unitList.length; i++) {
            var coverGrantor = unitList[i];
            var coverUnitActor = coverGrantor.isActor();
            for (var id = 1; id < $dataStates.length; id++) {
                if (coverUnitActor.isStateAffected(id)) {
                    var field = $dataStates[id].meta.field;
                    var activate = $dataStates[id].meta.activate;
                    var shift = $dataStates[id].meta.shift;
                    if (field && activate && coverUnitActor.canMove() && coverUnitActor.meetsSkillConditions($dataSkills[2]) && coverGrantor.checkProceedInvisibleArea(this.x, this.y)) {
                        if (activate == "cover") {
                            //女の子をかばうの処理(男性ユニットなら以降の処理は行わない)
                            if ($dataStates[id].meta.cover) {
                                if (($dataStates[id].meta.cover == "female") && ($dataClasses[this.isActor()._classId].meta.gender == "male")) continue;
                            }

                            if (coverGrantor.targetRange(this) <= parseInt(field) && (coverGrantor.isCoverTarget(this)) && (!coverGrantor._alreadyCover) && (!targets.includes(coverGrantor))) {
                                //かばうバフチェック
                                if (shift) {
                                    if (shift == "cover") {
                                        this.isActor().wtTurnAdvance();
                                    }
                                }
                                //座標入れ替え(入れ替えできない、リフレッシュ必要？)
                                var x = this.x;
                                var y = this.y;
                                this.setPosition(coverGrantor.x, coverGrantor.y);
                                coverGrantor.setPosition(x, y);
                                coverGrantor.turnTowardCharacter(attacker);// 向き
                                coverGrantor._alreadyCover = true; // かばうフラグon
                                return coverGrantor;
                                break;
                            }
                        }
                    }
                    //アフマウのアクティベート
                    if ($dataStates[id].meta.changeGrantor) {
                        //if ((this.isActor()._classId == parseInt($dataStates[id].meta.changeGrantor)) && coverUnitActor.canMove() && coverUnitActor.meetsSkillConditions($dataSkills[2]) && coverGrantor.checkProceedInvisibleArea(this.x, this.y) && (coverGrantor.isCoverTarget(this)) && (!coverGrantor._alreadyCover) && (!targets.includes(coverGrantor))) {
                        if (coverUnitActor.checkStateGrantorId(this.isActor().eventId(), id) && coverUnitActor.canMove() && coverUnitActor.meetsSkillConditions($dataSkills[2]) && coverGrantor.checkProceedInvisibleArea(this.x, this.y) && (coverGrantor.isCoverTarget(this)) && (!coverGrantor._alreadyCover) && (!targets.includes(coverGrantor))) {
                            //座標入れ替え
                            var x = this.x;
                            var y = this.y;
                            this.setPosition(coverGrantor.x, coverGrantor.y);
                            coverGrantor.setPosition(x, y);
                            coverGrantor.turnTowardCharacter(attacker);// 向き
                            coverGrantor._alreadyCover = true; // かばうフラグon
                            this.isActor().wtTurnAdvance();
                            return coverGrantor;
                            break;
                        }
                    }
                } else if (this.isActor().isStateAffected(id)) {
                    //レオンハルトのチェンジ用
                    if ($dataStates[id].meta.coverGrantor) {
                        //if ((coverUnitActor._classId == parseInt($dataStates[id].meta.coverGrantor)) && coverUnitActor.canMove() && coverUnitActor.meetsSkillConditions($dataSkills[2]) && coverGrantor.checkProceedInvisibleArea(this.x, this.y) && (coverGrantor.isCoverTarget(this)) && (!coverGrantor._alreadyCover) && (!targets.includes(coverGrantor))) {
                        if (this.isActor().checkStateGrantorId(coverUnitActor.eventId(), id) && coverUnitActor.canMove() && coverUnitActor.meetsSkillConditions($dataSkills[2]) && coverGrantor.checkProceedInvisibleArea(this.x, this.y) && (coverGrantor.isCoverTarget(this)) && (!coverGrantor._alreadyCover) && (!targets.includes(coverGrantor))) {
                            //座標入れ替え(入れ替えできない、リフレッシュ必要？)
                            var x = this.x;
                            var y = this.y;
                            this.setPosition(coverGrantor.x, coverGrantor.y);
                            coverGrantor.setPosition(x, y);
                            coverGrantor.turnTowardCharacter(attacker);// 向き
                            coverGrantor._alreadyCover = true; // かばうフラグon
                            return coverGrantor;
                            break;
                        }
                    }
                }
            }
        }
        return;
    };

    // ターゲット不能系
    Game_Event.prototype.nonTargetBuffCheck = function () {
        var actor = this.isActor();
        for (var id = 1; id < $dataStates.length; id++) {
            if (actor.isStateAffected(id)) {
                var invalid = $dataStates[id].meta.invalid;
                if (invalid) {
                    if (invalid == "target") return true;
                }
            }
        }
        return false;
    };

    // うそなき付与者かチェック
    Game_Event.prototype.effectLieCryingCheck = function (targets) {
        if (this.useSkill().scope == 7 || this.useSkill().scope == 8 || this.useSkill().scope == 11) return false;
        for (var i = 0; i < targets.length; i++) {
            var actor = targets[i].isActor();
            for (var id = 1; id < $dataStates.length; id++) {
                if (actor.isStateAffected(id)) {
                    var lieCrying = $dataStates[id].meta.lieCrying;
                    if (lieCrying && this.isAttackTarget(targets[i])) {
                        actor.wtTurnAdvance();
                        return true;
                    }
                }
            }
        }
        return false;
    };

    // ダメージ無効エリアに入っているか
    Game_Event.prototype.checkInvalidArea = function (target) {
        var unitList = $gameSystem.unitList();
        for (var i = 0; i < unitList.length; i++) {
            var invalidUnit = unitList[i];
            var invalidActor = invalidUnit.isActor();
            if (!invalidUnit.isCoverTarget(target) || invalidUnit == target) continue;
            for (var id = 1; id < $dataStates.length; id++) {
                if (invalidActor.isStateAffected(id)) {
                    var field = $dataStates[id].meta.field;
                    var invalid = $dataStates[id].meta.invalid;
                    if (field && invalid) {
                        if (invalid == "all") {
                            if (invalidUnit.targetRange(target) <= parseInt(field) && invalidUnit.targetRange(target) > 0) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
        return false;// this.isActor();
    };

    // 戦闘不能チェック
    Game_Event.prototype.checkDead = function () {
        var battler = this.isActor();
        if (battler.isDead()) {
            var eventId = this.event().id;
            $gameTemp.setDeadUnitId(eventId);
        }
    };
    /*
    ターゲット自動設定系-----------------------------------------------------------------------------
    */

    // 最も近いユニットをターゲットにする
    Game_Event.prototype.targetNearSearch = function (target) {
        if (this.target()) {
            if (this.targetRange(target) < this.targetRange(this.target()) && this.targetIsInvalid(target)) {
                return target;
            } else {
                return null;
            }
        } else {
            if (this.targetIsInvalid(target)) {
                return target;
            } else {
                return null;
            }
        }
    };

    // 最もHPの低いユニットをターゲットにする
    Game_Event.prototype.targetLowHpSearch = function (target) {
        if (this.target()) {
            if (target.isActor().hp < this.target().isActor().hp && this.targetIsInvalid(target)) {
                return target;
            } else {
                return null;
            }
        } else {
            if (this.targetIsInvalid(target)) {
                return target;
            } else {
                return null;
            }
        }
    };

    // 自身のHPが○○%以下で最も近いユニットをターゲットにする
    Game_Event.prototype.targetLessHpSelfNearSearch = function (target, rate) {
        if (this.isActor().hp < this.isActor().mhp * rate / 100) {
            if (this.targetRange(target) < this.targetRange(this.target()) && this.targetIsInvalid(target)) {
                return this.targetNearSearch(target);
            }
        }
        return null;
    };

    // 自身のHPが○○%以下で最もHPの低いユニットをターゲットにする
    Game_Event.prototype.targetLessHpSelfLowHpSearch = function (target, rate) {
        if (this.isActor().hp < this.isActor().mhp * rate / 100) {
            if (target.isActor().hp < this.target().isActor().hp && this.targetIsInvalid(target)) {
                return this.targetNearSearch(target);
            }
        }
        return null;
    };

    // 戦闘不能ユニット
    Game_Event.prototype.targetDeadSearch = function () {
        for (var i = 0; i < $gameSystem.enemyList().length; i++) {
            if ($gameSystem.enemyList()[i].isActor().isDead()) {
                return $gameSystem.enemyList()[i];
            }
        }
        return null;
    };
    // HPが○○%以下のユニット
    Game_Event.prototype.targetLessHpSearch = function (target, rate) {
        if (target.isActor().hp < target.isActor().mhp * rate / 100 && this.targetIsInvalid(target)) {
            return this.targetNearSearch(target);
        }
        return null;
    };

    // MPが○○%以下のユニット
    Game_Event.prototype.targetLessMpSearch = function (target, rate) {
        if (target.isActor().mp < target.isActor().mmp * rate / 100 && this.targetIsInvalid(target)) {
            return this.targetNearSearch(target);
        }
        return null;
    };
    // HPが○○%以上のユニット
    Game_Event.prototype.targetMoreHpSearch = function (target, rate) {
        if (target.isActor().hp >= target.isActor().mhp * rate / 100 && this.targetIsInvalid(target)) {
            return this.targetNearSearch(target);
        }
        return null;
    };
    // 特殊なステートにかかってるユニット
    Game_Event.prototype.targetStateSearch = function (target, stateId) {
        if (target.isActor().isStateAffected(stateId) && this.targetIsInvalid(target)) {
            return this.targetNearSearch(target);
        }
        return null;
    };
    // 特殊なステートにかかってないユニット
    Game_Event.prototype.targetNonstateSearch = function (target, stateId) {
        if (!(target.isActor().isStateAffected(stateId)) && this.targetIsInvalid(target)) {
            return this.targetNearSearch(target);
        }
        return null;
    };
    // バフにかかってるユニット
    Game_Event.prototype.targetBuffSearch = function (target) {
        for (var id = 1; id < $dataStates.length; id++) {
            if (target.isActor().isStateAffected(id) && $dataStates[id].meta.type == "buff" && !$dataStates[id].meta.buffFixed && this.targetIsInvalid(target)) {
                return this.targetNearSearch(target);
            }
        }
        return null;
    };
    // デバフにかかってるユニット
    Game_Event.prototype.targetDebuffSearch = function (target) {
        for (var id = 1; id < $dataStates.length; id++) {
            if (target.isActor().isStateAffected(id) && $dataStates[id].meta.type == "debuff" && !$dataStates[id].meta.debuffFixed && this.targetIsInvalid(target)) {
                return this.targetNearSearch(target);
            }
        }
        return null;
    };
    // 攻撃不能な対象か？
    Game_Event.prototype.targetIsInvalid = function (target) {
        if (this.isCoverTarget(target)) return true; //味方ユニットなら対象外
        for (var id = 1; id < $dataStates.length; id++) {
            //自身のバフデバフをチェックする
            if (this.isActor().isStateAffected(id)) {
            }
            //攻撃対象のバフデバフをチェックする
            if (target.isActor().isStateAffected(id)) {
                var invalid = $dataStates[id].meta.invalid;
                if (invalid) {
                    if (invalid == "target") {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    /*
    スキル自動設定系-----------------------------------------------------------------------------
    */
    Game_Event.prototype.skillSelectSetting = function () {
        var skillSelect = ($dataClasses[this.isActor()._classId].meta.skillSelect || 'target enemy near 1').split(',');
        var hateSkill;
        if ($dataClasses[this.isActor()._classId].meta.hateSkill) hateSkill = ($dataClasses[this.isActor()._classId].meta.hateSkill).split(',');
        //ターゲット固定されてた場合
        if ((this.isActor().checkHateState()) && hateSkill) {
            if (this.target()) {
                for (var i = 0; i < hateSkill.length; i++) {
                    var skill = $dataSkills[parseInt(hateSkill[i])];
                    var range = (skill.meta.range || 'diamond 1').split(' ');
                    if (this.isActor().meetsSkillConditions(skill) && (this.targetRange(this.target()) <= parseInt(range[1]))) {
                        this.setUseSkill(skill);
                        return;
                    }
                }
            }
        }
        for (var i = 0; i < skillSelect.length; i++) {
            this.setTarget(null); //いったんターゲットをリセット
            var command = skillSelect[i].split(' ');
            if (command[0] == "target") {
                if (command[1] == "self") {
                    switch (command[2]) {
                        case "lessHp":
                            var target = this.targetLessHpSearch(this, parseInt(command[3]));
                            var skill = $dataSkills[parseInt(command[4])];
                            if (target && this.isActor().meetsSkillConditions(skill)) {
                                this.setTarget(target);
                                this.setUseSkill(skill);
                                return;
                            }
                            break;
                        case "lessMp":
                            var target = this.targetLessMpSearch(this, parseInt(command[3]));
                            var skill = $dataSkills[parseInt(command[4])];
                            if (target && this.isActor().meetsSkillConditions(skill)) {
                                this.setTarget(target);
                                this.setUseSkill(skill);
                                return;
                            }
                            break;
                        case "nonState":
                            var target = this.targetNonstateSearch(this, parseInt(command[3]));
                            var skill = $dataSkills[parseInt(command[4])];
                            if (target && this.isActor().meetsSkillConditions(skill)) {
                                this.setTarget(target);
                                this.setUseSkill(skill);
                                return;
                            }
                            break;
                        case "state":
                            var target = this.targetStateSearch(this, parseInt(command[3]));
                            var skill = $dataSkills[parseInt(command[4])];
                            if (target && this.isActor().meetsSkillConditions(skill)) {
                                this.setTarget(target);
                                this.setUseSkill(skill);
                                return;
                            }
                            break;
                    }
                } else {
                    for (var j = 0; j < $gameSystem.unitList().length; j++) {
                        var unit = $gameSystem.unitList()[j];
                        var target;
                        if (unit.isActor().isDead()) continue; //対象が戦闘不能状態の場合は次のループへ
                        if ((command[1] == "enemy" && this.isAttackTarget(unit)) || (command[1] == "ally" && this.isCoverTarget(unit))) {
                            switch (command[2]) {
                                case "near":
                                    var skill = $dataSkills[parseInt(command[3])];
                                    if (!this.isActor().meetsSkillConditions(skill)) continue;
                                    target = this.targetNearSearch(unit);
                                    if (target) {
                                        var range = (skill.meta.range || 'diamond 1').split(' ');
                                        if (this.targetRange(target) <= parseInt(range[1])) {
                                            if (range[3]) { //rect設定されているか
                                                if (this.targetRange(target) <= parseInt(range[3])) continue;
                                            }
                                            //alert(target.isActor().name() + "との距離：" + this.targetRange(target));
                                            //alert("射程：" + parseInt(range[1]));
                                            this.setTarget(target);
                                            this.setUseSkill(skill);
                                        }
                                    }
                                    break;
                                case "move": //移動しながら攻撃
                                    var skill = $dataSkills[parseInt(command[3])];
                                    if (!this.isActor().meetsSkillConditions(skill)) continue;
                                    target = this.targetNearSearch(unit);
                                    break;
                                case "resurrection": //蘇生
                                    var skill = $dataSkills[parseInt(command[3])];
                                    if (!this.isActor().meetsSkillConditions(skill)) continue;
                                    target = this.targetDeadSearch();
                                    break;
                                case "lessHp":
                                    target = this.targetLessHpSearch(unit, parseInt(command[3]));
                                    var skill = $dataSkills[parseInt(command[4])];
                                    if (target && this.isActor().meetsSkillConditions(skill)) {
                                        var range = (skill.meta.range || 'diamond 1').split(' ');
                                        if (this.targetRange(target) <= parseInt(range[1])) {
                                            if (range[3]) { //rect設定されているか
                                                if (this.targetRange(target) <= parseInt(range[3])) continue;
                                            }
                                            this.setTarget(target);
                                            this.setUseSkill(skill);
                                        }
                                    }
                                    break;
                                case "nonState":
                                    target = this.targetNonstateSearch(unit, parseInt(command[3]));
                                    var skill = $dataSkills[parseInt(command[4])];
                                    if (target && this.isActor().meetsSkillConditions(skill)) {
                                        var range = (skill.meta.range || 'diamond 1').split(' ');
                                        if (this.targetRange(target) <= parseInt(range[1])) {
                                            if (range[3]) { //rect設定されているか
                                                if (this.targetRange(target) <= parseInt(range[3])) continue;
                                            }
                                            this.setTarget(target);
                                            this.setUseSkill(skill);
                                        }
                                    }
                                    break;
                                case "buff":
                                    target = this.targetBuffSearch(unit);
                                    var skill = $dataSkills[parseInt(command[3])];
                                    if (target && this.isActor().meetsSkillConditions(skill)) {
                                        var range = (skill.meta.range || 'diamond 1').split(' ');
                                        if (this.targetRange(target) <= parseInt(range[1])) {
                                            if (range[3]) { //rect設定されているか
                                                if (this.targetRange(target) <= parseInt(range[3])) continue;
                                            }
                                            this.setTarget(target);
                                            this.setUseSkill(skill);
                                        }
                                    }
                                    break;
                                case "debuff":
                                    target = this.targetDebuffSearch(unit);
                                    var skill = $dataSkills[parseInt(command[3])];
                                    if (target && this.isActor().meetsSkillConditions(skill)) {
                                        var range = (skill.meta.range || 'diamond 1').split(' ');
                                        if (this.targetRange(target) <= parseInt(range[1])) {
                                            if (range[3]) { //rect設定されているか
                                                if (this.targetRange(target) <= parseInt(range[3])) continue;
                                            }
                                            this.setTarget(target);
                                            this.setUseSkill(skill);
                                        }
                                    }
                                    break;
                                case "self":
                                    switch (command[3]) {
                                        case "lessHp":
                                            if (this.targetLessHpSearch(this, parseInt(command[4]))) {
                                                var skill = $dataSkills[parseInt(command[5])];
                                                if (!this.isActor().meetsSkillConditions(skill)) continue;
                                                target = this.targetNearSearch(unit);
                                                if (target) {
                                                    var range = (skill.meta.range || 'diamond 1').split(' ');
                                                    if (this.targetRange(target) <= parseInt(range[1])) {
                                                        if (range[3]) { //rect設定されているか
                                                            if (this.targetRange(target) <= parseInt(range[3])) continue;
                                                        }
                                                        this.setTarget(target);
                                                        this.setUseSkill(skill);
                                                    }
                                                }
                                            }
                                            break;
                                        case "lessMp":
                                            if (this.targetLessMpSearch(this, parseInt(command[4]))) {
                                                var skill = $dataSkills[parseInt(command[5])];
                                                if (!this.isActor().meetsSkillConditions(skill)) continue;
                                                target = this.targetNearSearch(unit);
                                                if (target) {
                                                    var range = (skill.meta.range || 'diamond 1').split(' ');
                                                    if (this.targetRange(target) <= parseInt(range[1])) {
                                                        if (range[3]) { //rect設定されているか
                                                            if (this.targetRange(target) <= parseInt(range[3])) continue;
                                                        }
                                                        this.setTarget(target);
                                                        this.setUseSkill(skill);
                                                    }
                                                }
                                            }
                                            break;
                                        case "state":
                                            if (this.targetStateSearch(this, parseInt(command[4]))) {
                                                var skill = $dataSkills[parseInt(command[5])];
                                                if (!this.isActor().meetsSkillConditions(skill)) continue;
                                                target = this.targetNearSearch(unit);
                                                if (target) {
                                                    var range = (skill.meta.range || 'diamond 1').split(' ');
                                                    if (this.targetRange(target) <= parseInt(range[1])) {
                                                        if (range[3]) { //rect設定されているか
                                                            if (this.targetRange(target) <= parseInt(range[3])) continue;
                                                        }
                                                        this.setTarget(target);
                                                        this.setUseSkill(skill);
                                                    }
                                                }
                                            }
                                            break;
                                        case "debuff":
                                            if (this.targetDebuffSearch(this)) {
                                                var skill = $dataSkills[parseInt(command[4])];
                                                if (!this.isActor().meetsSkillConditions(skill)) continue;
                                                target = this.targetNearSearch(unit);
                                                if (target) {
                                                    var range = (skill.meta.range || 'diamond 1').split(' ');
                                                    if (this.targetRange(target) <= parseInt(range[1])) {
                                                        if (range[3]) { //rect設定されているか
                                                            if (this.targetRange(target) <= parseInt(range[3])) continue;
                                                        }
                                                        this.setTarget(target);
                                                        this.setUseSkill(skill);
                                                    }
                                                }
                                            }
                                            break;
                                    }
                                    break;
                            }
                        }
                    }
                    if (command[2] == "move" && target) {
                        var effect = (skill.meta.effect || 'diamond 1').split(' ');
                        if (parseInt(effect[1]) == "self") continue;
                        this.setTarget(target);
                        //alert(target.isActor().name() + "の座標x：" + target.x +"、座標y：" + target.y);
                        this.setUseSkill(skill);
                        $gameSystem._moveTargetPointFlag = true;
                        $gameMap.showRangeArea(this, null);
                        targetpos = this.setMovePoint(parseInt(effect[1]));
                        this.setTarget(this);
                        if (targetpos) {
                            $gameSystem._moveTargetPointX = targetpos.x;
                            $gameSystem._moveTargetPointY = targetpos.y;
                        } else {
                            $gameSystem._moveTargetPointX = this.x;
                            $gameSystem._moveTargetPointY = this.y;
                        }
                    } else if (command[2] == "resurrection" && target) {
                        var effect = (skill.meta.effect || 'diamond 1').split(' ');
                        if (parseInt(effect[1]) == "self") continue;
                        $gameSystem.setResurrectionUnit(target);
                        this.setTarget($gameSystem.isResurrectionUnit());
                        this.setUseSkill(skill);
                        $gameSystem._resurrectionFlag = true;
                        $gameMap.showRangeArea(this, null);
                        targetpos = this.setMovePoint(parseInt(effect[1]));

                        $gameSystem._resurrectionFlag = true;
                        $gameSystem.isResurrectionUnit()._x = targetpos.x;
                        $gameSystem.isResurrectionUnit()._y = targetpos.y;
                    }
                }
            } else if (command[0] == "round") {
                var moveRange = parseInt(command[1]);
                var count = 0;
                while (moveRange > 0) {
                    for (var x = -moveRange; x <= moveRange; x++) {
                        for (var y = -moveRange; y <= moveRange; y++) {
                            if ((Math.abs(x) + Math.abs(y)) == moveRange) {
                                var unit;
                                if (command[2] == "enemy") {
                                    unit = $gameMap.unitAttackTargetXy(this.x + x, this.y + y, this);
                                } else if (command[2] == "ally") {
                                    unit = $gameMap.unitCoverTargetXy(this.x + x, this.y + y, this);
                                }
                                if (!unit) continue;
                                switch (command[3]) {
                                    case "is":
                                        var skill = $dataSkills[parseInt(command[5])];
                                        if (this.isActor().meetsSkillConditions(skill)) {
                                            this.setTarget(unit);
                                            this.setUseSkill(skill);
                                            count++;
                                        }
                                        break;
                                    case "buff"://バフが１つでもついていたらカウント増加
                                        var target = this.targetBuffSearch(unit);
                                        var skill = $dataSkills[parseInt(command[5])];
                                        if (target && this.isActor().meetsSkillConditions(skill)) {
                                            this.setTarget(target);
                                            this.setUseSkill(skill);
                                            count++;
                                        }
                                        break;
                                    case "debuff"://デバフが１つでもついていたらカウント増加
                                        var target = this.targetDebuffSearch(unit);
                                        var skill = $dataSkills[parseInt(command[5])];
                                        if (target && this.isActor().meetsSkillConditions(skill)) {
                                            this.setTarget(target);
                                            this.setUseSkill(skill);
                                            count++;
                                        }
                                        break;
                                    case "nonState"://デバフが１つでもついていたらカウント増加
                                        var target = this.targetNonstateSearch(unit, parseInt(command[5]));
                                        var skill = $dataSkills[parseInt(command[6])];
                                        if (target && this.isActor().meetsSkillConditions(skill)) {
                                            this.setTarget(target);
                                            this.setUseSkill(skill);
                                            count++;
                                        }
                                        break;
                                    case "lessHp"://HP○○%以下でカウント増加
                                        var target = this.targetLessHpSearch(unit, parseInt(command[5]));
                                        var skill = $dataSkills[parseInt(command[6])];
                                        if (target && this.isActor().meetsSkillConditions(skill)) {
                                            this.setTarget(target);
                                            this.setUseSkill(skill);
                                            count++;
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    moveRange--;
                }
                if (count >= parseInt(command[4])) {
                    return;
                } else {
                    this.setTarget(null);
                    this.setUseSkill(null);
                }
            }
            if (this.target() && this.useSkill() || $gameSystem._moveTargetPointFlag) break; //移動しながら攻撃の場合ターゲットの代わりに移動する座標をフラグにするべきか
        }
    };
    /*
    目的地自動設定系-----------------------------------------------------------------------------
    */
    Game_Event.prototype.moveToSetting = function () {
        var moveTo = ($dataClasses[this.isActor()._classId].meta.moveTo || 'target enemy near 1').split(',');
        var targetpos;
        this.setTarget(null);
        //var searchRange = $dataClasses[this.isActor()._classId].meta.searchRange;
        //ターゲット固定されてた場合
        var hateState = this.isActor().checkHateState();
        if (hateState) {
            for (var j = 0; j < $gameSystem.unitList().length; j++) {
                var unit = $gameSystem.unitList()[j];
                if (this.isActor().checkStateGrantorId(unit.event().id, parseInt(hateState))) {
                    this.setTarget(unit);
                    targetpos = this.setMovePoint(1);
                    return targetpos;
                }
            }
        }
        for (var i = 0; i < moveTo.length; i++) {
            this.setTarget(null);
            var command = moveTo[i].split(' ');
            if (command[0] == "target") {
                for (var j = 0; j < $gameSystem.unitList().length; j++) {
                    var unit = $gameSystem.unitList()[j];
                    if (unit.isActor().isDead() || (unit == this)) continue; //対象が戦闘不能状態の場合は次のループへ
                    if ((command[1] == "enemy" && this.isAttackTarget(unit)) || (command[1] == "ally" && this.isCoverTarget(unit))) {
                        switch (command[2]) {
                            case "near":
                                var target = this.targetNearSearch(unit);
                                if (target) {
                                    this.setTarget(target);
                                    targetpos = this.setMovePoint(parseInt(command[3]));
                                }
                                break;
                            case "lessHp":
                                var target = this.targetLessHpSearch(unit, parseInt(command[3]));
                                if (target) {
                                    this.setTarget(target);
                                    targetpos = this.setMovePoint(parseInt(command[4]));
                                }
                                break;
                            case "lessMp":
                                var target = this.targetLessMpSearch(unit, parseInt(command[3]));
                                if (target) {
                                    this.setTarget(target);
                                    targetpos = this.setMovePoint(parseInt(command[4]));
                                }
                                break;
                            case "nonState":
                                var target = this.targetNonstateSearch(unit, parseInt(command[3]));
                                if (target) {
                                    this.setTarget(target);
                                    targetpos = this.setMovePoint(parseInt(command[4]));
                                }
                                break;
                            case "buff":
                                var target = this.targetBuffSearch(unit);
                                if (target) {
                                    this.setTarget(target);
                                    targetpos = this.setMovePoint(parseInt(command[3]));
                                }
                                break;
                            case "debuff":
                                var target = this.targetDebuffSearch(unit);
                                if (target) {
                                    this.setTarget(target);
                                    targetpos = this.setMovePoint(parseInt(command[3]));
                                }
                                break;
                            case "self":
                                if (command[3] == "state") {
                                    var target = this.targetStateSearch(this, parseInt(command[4]));
                                    if (target) {
                                        this.setTarget(target);
                                        targetpos = this.setMovePoint(parseInt(command[5]));
                                    }
                                }
                                break;
                        }
                    }
                }
                //if(targetpos && !(command[2] == "near")) return targetpos;
            } else if (command[0] == "round") {
                var moveRange = parseInt(command[1]);
                var count = 0;
                while (moveRange > 0) {
                    for (var x = -moveRange; x <= moveRange; x++) {
                        for (var y = -moveRange; y <= moveRange; y++) {
                            if ((Math.abs(x) + Math.abs(y)) == moveRange) {
                                var unit;
                                if (command[2] == "enemy") {
                                    unit = $gameMap.unitAttackTargetXy(this.x + x, this.y + y, this);
                                } else if (command[2] == "ally") {
                                    unit = $gameMap.unitCoverTargetXy(this.x + x, this.y + y, this);
                                }
                                if (!unit) continue;
                                switch (command[3]) {
                                    case "is":
                                        count++;
                                        break;
                                    case "buff"://バフが１つでもついていたらカウント増加
                                        var target = this.targetBuffSearch(unit);
                                        if (target) count++;
                                        break;
                                    case "debuff"://デバフが１つでもついていたらカウント増加
                                        var target = this.targetDebuffSearch(unit);
                                        if (target) count++;
                                        break;
                                    case "nonState"://デバフが１つでもついていたらカウント増加
                                        var target = this.targetNonstateSearch(unit, parseInt(command[5]));
                                        if (target) count++;
                                        break;
                                }
                            }
                        }
                    }
                    moveRange--;
                }
                if (count >= parseInt(command[4])) {
                    //条件を満たしていたら移動しない
                    return null;
                }
            }
            if (targetpos) {
                return targetpos;
            } else {
                return null;
            }
        }

    };
    //移動ポイント設定
    Game_Event.prototype.setMovePoint = function (squares) {
        var moveRange;
        if (squares) {
            moveRange = squares;
        } else {
            moveRange = 1;
        }
        var xPoint = this.target().x;
        var yPoint = this.target().y;
        //ターゲットからスキル発動できるポイントまで移動可能かチェック
        while (moveRange > 0) {
            for (var x = -moveRange; x <= moveRange; x++) {
                for (var y = -moveRange; y <= moveRange; y++) {
                    if ((Math.abs(x) + Math.abs(y)) == moveRange) {
                        xPoint = this.target().x + x;
                        yPoint = this.target().y + y;
                        if ($gameMap.isInsideArea(xPoint, yPoint)) {
                            result = new Point(xPoint, yPoint);
                            return result;
                        }
                    }
                }
            }
            moveRange--;
        }
        return $gameMap.posInsideAreaNearXy(xPoint, yPoint);
    };


    /*
    距離測定系-----------------------------------------------------------------------------
    */

    // XY座標との距離を返す
    Game_Event.prototype.xyRange = function (targetX, targetY) {
        var x = this.deltaXFrom(targetX);
        var y = this.deltaYFrom(targetY);

        //絶対式に書き換える
        var range = Math.abs(x) + Math.abs(y);
        return range;
    };

    // 対象との距離を返す
    Game_Event.prototype.targetRange = function (target) {
        var x = this.deltaXFrom(target.x);
        var y = this.deltaYFrom(target.y);
        //絶対式に書き換える
        var range = Math.abs(x) + Math.abs(y);
        return range;
    };

    //通行不能か
    Game_Event.prototype.isCollided = function (x, y) {
        if (this.isThrough()) {
            return false;
        } else {
            return this.pos(x, y);
        }
    };

    /*
    ダメージ表示系-----------------------------------------------------------------------------
    */

    // ダメージポップアップの予約
    Game_Event.prototype.reserveDamagePopup = function (delay) {
        this._damagePopupDelay = delay;
        var battler = this.isActor();
        this._damagePopupResult = JSON.parse(JSON.stringify(battler.result()));
    };

    // ダメージポップアップが予約されているかを返す
    Game_Event.prototype.isDamagePopupReserved = function () {
        return this._damagePopupDelay !== null;
    };

    // フレーム更新
    var _Game_Event_update = Game_Event.prototype.update;
    Game_Event.prototype.update = function () {
        _Game_Event_update.call(this);
        this.updateDamagePopup();
    };

    // ダメージポップアップの更新
    Game_Event.prototype.updateDamagePopup = function () {
        if (this.isDamagePopupReserved()) {
            this._damagePopupDelay--;
            if (this._damagePopupDelay <= 0) {
                this.pasteDamagePopupResult();
                var battler = this.isActor();
                battler.startDamagePopup(); //ダメージポップ表示(表示されない(↓の方にあるSprite_Character参照))
                var result = battler.result(); //戦闘結果の取得(https://katai5plate.github.io/RPGMV-CoreScript-Reference/jsdoc/Game_ActionResult.html参照)

                if (result.missed) {
                    battler.startMessagePopup("Miss", paramMissColor);
                    SoundManager.playMiss();//ミスの音
                } else if (result.evaded) {
                    battler.startMessagePopup("Miss", paramMissColor);
                    SoundManager.playEvasion();//回避の音
                } else if (result.hpAffected) {

                    if (result.hpDamage > 0) {
                        if (result.critical) battler.startMessagePopup("CRITICAL!", paramCriticalColor);
                        if (battler.isWeak()) battler.startElementMessagePopup("Weak!", paramWeaknessColor);
                        if (battler.isResist()) battler.startElementMessagePopup("Resist!", paramResistanceColor);
                        if (this.isAlly()) {
                            SoundManager.playActorDamage();//味方ダメージ
                        } else {
                            SoundManager.playEnemyDamage();//敵ダメージ
                        }
                    } else if (result.hpDamage < 0) {
                        SoundManager.playRecovery();//回復の音
                    }
                }
                this._damagePopupDelay = null;
            }
        }
    };

    Game_Event.prototype.pasteDamagePopupResult = function () {
        var battler = this.isActor();
        var result = battler.result();
        result.missed = this._damagePopupResult.missed;
        result.evaded = this._damagePopupResult.evaded;
        result.hpAffected = this._damagePopupResult.hpAffected;
        result.hpDamage = this._damagePopupResult.hpDamage;
        result.mpDamage = this._damagePopupResult.mpDamage;
        result.critical = this._damagePopupResult.critical;
        this._damagePopupResult = null;
    };

    //-----------------------------------------------------------------------------
    // Game_CharacterBase
    //
    var _Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers;
    Game_CharacterBase.prototype.initMembers = function () {
        _Game_CharacterBase_initMembers.call(this);
        this._target = null; //対象
        this._move = 0; //移動力
        this._allyId = null;
        this._enemyId = null;
        this._unitId = null;
        this._actor = null; //アクターであった場合代入
    };
    // キャラクターがSRPGユニットかどうかを返す
    Game_CharacterBase.prototype.isUnit = function () {
        return false;
    };

    // 割り当てられたユニットIDを返す用
    Game_CharacterBase.prototype.isUnitId = function () {
        return this._unitId;
    };

    // ユニットIDセット用
    Game_CharacterBase.prototype.setUnitId = function (id) {
        this._unitId = id;
    };

    // アクターかエネミーか
    Game_CharacterBase.prototype.setActor = function (actor) {
        this._actor = actor;
    };

    // アクターかエネミーか
    Game_CharacterBase.prototype.isActor = function () {
        if (this._actor) {
            return this._actor;
        } else {
            return undefined;
        }
    };

    // アクターかどうか
    Game_CharacterBase.prototype.isAlly = function () {
        if (this._allyId) {
            return this._actor;
        } else {
            return undefined;
        }
    };

    // エネミーかどうか
    Game_CharacterBase.prototype.isEnemy = function () {
        if (this._enemyId) {
            return this._actor;
        } else {
            return undefined;
        }
    };

    // 敵対関係か敵対の場合trueを返し味方だった場合はfalseを返す
    Game_CharacterBase.prototype.isHostileUnit = function (target) {
        if (this.isAlly()) {
            if (target.isAlly()) {
                if (this.isActor().checkCtrlGrantor()) {
                    return true;
                } else {
                    return false;
                }
            } else if (target.isEnemy()) {
                if (this.isActor().checkCtrlGrantor()) {
                    return false;
                } else {
                    return true;
                }
            }
        } else if (this.isEnemy()) {
            if (target.isEnemy()) {
                if (this.isActor().checkCtrlGrantor()) {
                    return true;
                } else {
                    return false;
                }
            } else if (target.isAlly()) {
                if (this.isActor().checkCtrlGrantor()) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    };

    // 攻撃対象か
    Game_CharacterBase.prototype.isAttackTarget = function (target) {
        if (this.isActor().restriction() == 2) {
            return true;
        } else {
            if (this.isHostileUnit(target)) {
                return true;
            } else {
                return false;
            }
        }

    };

    // カバー対象か
    Game_CharacterBase.prototype.isCoverTarget = function (target) {
        if (this.isActor().restriction() == 2) {
            return true;
        } else {
            if (this.isHostileUnit(target)) {
                return false;
            } else {
                return true;
            }
        }

    };

    //攻撃アニメ用に改変
    var _Game_CharacterBase_updateAnimation = Game_CharacterBase.prototype.updateAnimation;
    Game_CharacterBase.prototype.updateAnimation = function () {
        this.updateAnimationCount();
        if (this._animationCount >= this.animationWait()) {
            if ($gameTemp._attacktime) {
                this.updateAttackPattern();
            } else {
                this.updatePattern();
            }
            this._animationCount = 0;
        }
    };

    Game_CharacterBase.prototype.updateAttackPattern = function () {
        if (!this.hasStepAnime() && this._stopCount > 0) {
            this.resetPattern();
        } else {
            if (this._pattern == (this.maxPattern() - 1)) $gameTemp._attackTime = false;
            this._pattern = (this._pattern + 1) % this.maxPattern();
        }
    };

    //-----------------------------------------------------------------------------
    // Game_Character
    //
    //待機時、方向設定に使う？
    Game_Character.prototype.turnTowardXy = function (x, y) {
        var sx = this.deltaXFrom(x);
        var sy = this.deltaYFrom(y);
        if (Math.abs(sx) > Math.abs(sy)) {
            this.setDirection(sx > 0 ? 4 : 6);
        } else if (sy !== 0) {
            this.setDirection(sy > 0 ? 8 : 2);
        }
    };

    //移動先をX座標、Y座標で指定
    Game_Character.prototype.moveTowardXy = function (x, y) {
        var sx = this.deltaXFrom(x);
        var sy = this.deltaYFrom(y);
        if (Math.abs(sx) > Math.abs(sy)) {
            this.moveStraight(sx > 0 ? 4 : 6);
            if (!this.isMovementSucceeded() && sy !== 0) {
                this.moveStraight(sy > 0 ? 8 : 2);
            }
        } else if (sy !== 0) {
            this.moveStraight(sy > 0 ? 8 : 2);
            if (!this.isMovementSucceeded() && sx !== 0) {
                this.moveStraight(sx > 0 ? 4 : 6);
            }
        }
    };

    //移動可能エリアかどうか判定するメソッド(rpg_objects.jsのfindDirectionToから引用)
    Game_Character.prototype.findAreaTo = function (goalX, goalY) {
        var searchLimit = this.searchLimit();
        var mapWidth = $gameMap.width();
        var nodeList = [];
        var openList = [];
        var closedList = [];
        var start = {};
        var best = start;

        if (this.x === goalX && this.y === goalY) {
            return true;
        }

        start.parent = null;
        start.x = this.x;
        start.y = this.y;
        start.g = 0;
        start.f = $gameMap.distance(start.x, start.y, goalX, goalY); //目標地点までの距離
        nodeList.push(start);
        openList.push(start.y * mapWidth + start.x);

        while (nodeList.length > 0) {
            var bestIndex = 0;
            //おそらく最短距離であるかのチェック
            for (var i = 0; i < nodeList.length; i++) {
                if (nodeList[i].f < nodeList[bestIndex].f) {
                    bestIndex = i;
                }
            }

            var current = nodeList[bestIndex];
            var x1 = current.x;
            var y1 = current.y;
            var pos1 = y1 * mapWidth + x1;
            var g1 = current.g;

            nodeList.splice(bestIndex, 1); //ベストインデックスを取り除く
            openList.splice(openList.indexOf(pos1), 1);
            closedList.push(pos1);

            if (current.x === goalX && current.y === goalY) {
                best = current;
                break;
            }

            if (g1 >= searchLimit) {
                continue; //探索範囲外だった場合は以降の処理は行わずループする
            }

            for (var j = 0; j < 4; j++) {
                var direction = 2 + j * 2;
                var x2 = $gameMap.roundXWithDirection(x1, direction);
                var y2 = $gameMap.roundYWithDirection(y1, direction);
                var pos2 = y2 * mapWidth + x2;

                if (closedList.contains(pos2)) {
                    continue;
                }
                if (!this.canPass(x1, y1, direction)) {//ここが機能してないような
                    continue; //通行不可だった場合は以降の処理は行わずループする
                }

                var g2 = g1 + 1;
                var index2 = openList.indexOf(pos2);

                if (index2 < 0 || g2 < nodeList[index2].g) {
                    var neighbor;
                    if (index2 >= 0) {
                        neighbor = nodeList[index2];
                    } else {
                        neighbor = {};
                        nodeList.push(neighbor);
                        openList.push(pos2);
                    }
                    neighbor.parent = current;
                    neighbor.x = x2;
                    neighbor.y = y2;
                    neighbor.g = g2;
                    neighbor.f = g2 + $gameMap.distance(x2, y2, goalX, goalY);
                    if (!best || neighbor.f - neighbor.g < best.f - best.g) {
                        best = neighbor;
                    }
                }
            }
        }

        //探索結果移動可能ならtrueを返す
        if (best.x == goalX && best.y == goalY) {
            return true;
        } else {
            return false;
        }
    };

    //探索上限数(ルート検索の上限数を返す。)(rpg_objects.jsから引用)
    var _Game_Character_searchLimit = Game_Character.prototype.searchLimit;
    Game_Character.prototype.searchLimit = function () {
        if (this.isActor()) {
            return this._move; //移動範囲を返す
        } else {
            return 12;
        }
    };


    //-----------------------------------------------------------------------------
    // Game_Enemy
    //

    Object.defineProperty(Game_Enemy.prototype, 'level', {
        get: function () {
            return this.enemy().meta.level || 1;
        },
        configurable: true
    });

    Game_Enemy.prototype.faceName = function () {
        return this.enemy().meta.faceName || '';
    };

    Game_Enemy.prototype.faceIndex = function () {
        return +(this.enemy().meta.faceIndex || 0);
    };

    Game_Enemy.prototype.nickname = function () {
        return this.enemy().meta.nickname || '';
    };

    Game_Enemy.prototype.profile = function () {
        return this.enemy().meta.profile || '';
    };

    Game_Enemy.prototype.currentClass = function () {
        return $dataClasses[this.enemy().meta.class || 1];
    };

    Game_Enemy.prototype.equips = function () {
        var equipIds = this.enemy().meta.equips;
        if (equipIds) {
            equipIds = equipIds.split(' ').map(Number);
            return equipIds.map(function (id, i) {
                return i === 0 ? $dataWeapons[id] : $dataArmors[id];
            });
        }
        return [];
    };

    Game_Enemy.prototype.attackAnimationId1 = function () {
        return +(this.enemy().meta.attackAnimation || 1);
    };

    // srpg用の自動行動決定処理
    Game_Enemy.prototype.srpgMakeActions = function () {
        return this.makeActions();
    };

    //-----------------------------------------------------------------------------
    // Game_Player
    //

    var _Game_Player_hasStepAnime = Game_Player.prototype.hasStepAnime;
    Game_Player.prototype.hasStepAnime = function () {
        return _Game_Player_hasStepAnime.call(this) || $gameSystem.isBattleActivate();
    };

    var _Game_Player_refresh = Game_Player.prototype.refresh;
    Game_Player.prototype.refresh = function () {
        _Game_Player_refresh.call(this);
        if ($gameSystem.isBattleActivate() || $gameSwitches.value(3)) {  // SRPG機能が有効なら歩行グラフィックをカーソルにする
            var characterName = cursorImage;//"!$Cursor"//cursorImage;
            var characterIndex = 0;
            this.setImage(characterName, characterIndex);
        }
    };


    //移動状態をアップデート(カーソルが消えて移動不可になる　原因は？)
    var _Game_Player_updateMove = Game_Player.prototype.updateMove;
    Game_Player.prototype.updateMove = function () {
        if ($gameSystem.isBattleActivate() && ($gameSystem.isAllyTurn() || $gameSystem.isEnemyTurn() || $gameTemp.isReservationAction())) {
            if (this._x < this._realX) {
                this._realX = Math.max(this._realX - this._vx, this._x);
            } else if (this._x > this._realX) {
                this._realX = Math.min(this._realX + this._vx, this._x);
            }
            if (this._y < this._realY) {
                this._realY = Math.max(this._realY - this._vy, this._y);
            } else if (this._y > this._realY) {
                this._realY = Math.min(this._realY + this._vy, this._y);
            }
        } else {
            _Game_Player_updateMove.call(this);
        }
    };


    //移動状態をアップデート
    var _Game_Player_updateNonmoving = Game_Player.prototype.updateNonmoving;
    Game_Player.prototype.updateNonmoving = function (wasMoving) {
        if (!$gameSystem.isBattleActivate() && ($gameSystem.isAllyTurn() || $gameSystem.isEnemyTurn() || $gameTemp.isReservationAction())) {
            _Game_Player_updateNonmoving.call(this, wasMoving);
        }
    };

    //操作可能か？
    var _Game_Player_canMove = Game_Player.prototype.canMove;
    Game_Player.prototype.canMove = function () {
        return $gameTemp._commandTime ? false : _Game_Player_canMove.call(this);
    };

    // SRPG機能（カメラ）としての移動先をセットする（座標で指定）
    Game_Player.prototype.setCameraXy = function (x, y) {
        //プレイヤーの移動速度を変更
        //this.setMoveSpeed(6);

        this._x = x;
        this._y = y;
        this._vx = Math.abs((this._x - this._realX) / 8);
        this._vy = Math.abs((this._y - this._realY) / 8);
        //this.setMoveSpeed(4); //元の速度
    };

    // SRPG機能（カメラ）としての移動先をセットする（イベントで指定）
    Game_Player.prototype.setCameraEvent = function (event) {
        if (event) this.setCameraXy(event.x, event.y);
    };

    //-----------------------------------------------------------------------------
    // Game_Interpreter
    //

    // Set Movement Route
    var _Game_Interpreter_command205 = Game_Interpreter.prototype.command205;
    Game_Interpreter.prototype.command205 = function () {
        $gameMap.refreshIfNeeded();
        this._character = this.character(this._params[0]);
        this._character._originalPattern = 1; //キャラ挿入するとアニメパターンが0スタートになるところを1にしたい
        if (this._character) {
            this._character.forceMoveRoute(this._params[1]);
            if (this._params[1].wait) {
                this.setWaitMode('route');
            }
        }
        return true;
    };
    //-----------------------------------------------------------------------------
    // Spriteset_Base
    //
    // 初期化(デフォルトのソースを丸パクリ)
    var _Spriteset_Base_initialize = Spriteset_Base.prototype.initialize;
    Spriteset_Base.prototype.initialize = function () {
        Sprite.prototype.initialize.call(this);
        this.setFrame(0, 0, Graphics.width, Graphics.height);
        this._tone = [0, 0, 0, 0];
        this.opaque = true;
        this.createLowerLayer();
        this.createToneChanger();
        this.createUpperLayer();
        //this.update();//ここが原因で戦闘イベント中のロード時エラーが発生するためコメントアウトする
    };

    //-----------------------------------------------------------------------------
    // Spriteset_Map
    //

    // メンバ変数の初期化
    var _Spriteset_Map_initialize = Spriteset_Map.prototype.initialize;
    Spriteset_Map.prototype.initialize = function () {
        _Spriteset_Map_initialize.call(this);
        //this.createWeaponSprite();//武器アニメ不要になったためコメントアウト

    };

    // フレーム更新
    var _Spriteset_Map_update = Spriteset_Map.prototype.update;
    Spriteset_Map.prototype.update = function () {
        _Spriteset_Map_update.call(this);
        if (this._weaponSprite) this.updateMotion();//setupWeaponAnimation();//武器アニメ更新

        if ($gameSystem._battleActive) {
            this.updateWtTurnList();
        } else {
            this.removeWtTurnList();
        }
    };

    //行動順リスト消去
    Spriteset_Map.prototype.removeWtTurnList = function () {
        if (this._wtTurnListSprite) {
            for (var i = 0; i < wtTurnListMax; i++) {
                if (this._wtTurnListSprite[i]) {
                    this.removeChild(this._wtTurnListSprite[i]);
                }
            }
        }
    };

    // WTターンリストウインドウ更新
    Spriteset_Map.prototype.updateWtTurnList = function () {
        if (!this._wtTurnListSprite) {
            this._wtTurnListSprite = [];
        }
        /*
        if($gameSwitches.value(15) && $gameSystem) {
            if(!$gameSystem._wtTurnList) $gameSystem.syncWtList();
        }
        */
        for (var i = 0; i < wtTurnListMax; i++) {
            if (!this._wtTurnListSprite[i]) {
                this._wtTurnListSprite[i] = new Sprite_WtTurnList(i);
                this._wtTurnListSprite[i].x = 64//Graphics.boxWidth-64;
                this._wtTurnListSprite[i].y = 64 + 36 * i;
                this._wtTurnListSprite[i].z = 9;
                this._wtTurnListSprite[i].scale.x = 0.5;
                this._wtTurnListSprite[i].scale.y = 0.5;
                this.addChild(this._wtTurnListSprite[i]);
            }
        }
    };

    /*
    武器表示用メソッド
    */
    //武器アニメ表示用
    Spriteset_Map.prototype.createWeaponSprite = function () {
        this._weaponSprite = new Sprite_Weapon();
        this._tilemap.addChild(this._weaponSprite);
    };

    //武器アニメの準備
    Spriteset_Map.prototype.setupWeaponAnimation = function () {
        var turnUnit = $gameSystem.turnUnit();
        if (!turnUnit) return;
        if (turnUnit.length == 0) return; //配列が空の場合処理を終了する
        var character = turnUnit.isActor();

        if (character) {
            if (character.isWeaponAnimationRequested()) {
                this._weaponSprite.setCharacter(turnUnit);
                this._weaponSprite.setup(character.weaponImageId());
                character.clearWeaponAnimation();
            }
        }
    };

    //動きの更新
    Spriteset_Map.prototype.updateMotion = function () {
        this.setupWeaponAnimation(); //武器アニメ更新
    };



    //-----------------------------------------------------------------------------
    // Sprite_WtTurnList
    //

    function Sprite_WtTurnList(i) {
        this._number = i;
        this.initialize.apply(this, arguments);
    }

    Sprite_WtTurnList.prototype = Object.create(Sprite.prototype);
    Sprite_WtTurnList.prototype.constructor = Sprite_WtTurnList;

    Sprite_WtTurnList.prototype.initialize = function () {
        Sprite.prototype.initialize.call(this);
        this.bitmap = new Bitmap(64, 64);
        this.z = 9;
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this._maxWidth = 32;
        this._lineHeight = 32;

    };

    Sprite_WtTurnList.prototype.update = function () {
        Sprite.prototype.update.call(this);
        this.refresh();
    };

    Sprite_WtTurnList.prototype.refresh = function () {
        this.bitmap.clear();
        if (!$gameSystem._wtTurnList) return;
        if (!$gameSystem._wtTurnList[this._number]) return;

        var id = $gameSystem._wtTurnList[this._number][0]; //OnlineAvatar.jsと併用させるとエラーが発生する
        var character = $gameMap._events[id];
        if (!character) return;
        var image = ImageManager.loadCharacter(character.characterName());
        var big = ImageManager.isBigCharacter(character.characterName());
        var pw = image.width / (big ? 3 : 12);
        var ph = image.height / (big ? 4 : 8);
        var n = character.characterIndex();
        if (big) n = 0;
        var sx = (n % 4 * 3 + 1) * pw + pw / 4;
        var sy = (Math.floor(n / 4) * 4) * ph + ph / 4;
        sy = sy + sy / 4;

        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var text = alphabet[character.unitId - 1];

        if (character.isAlly()) {
            var color = 'blue';
        } else {
            var color = 'red';
        }

        this.bitmap.fillRect(0, 0, 64, 64, 'black');
        this.bitmap.fillRect(4, 4, 56, 56, color);

        this.bitmap.blt(image, sx, sy, pw, ph, 24, 12, pw, ph);
        this.bitmap.drawText(this._number + 1, 8, 12, 16, 16, 'left');
        if (useUnitID) {
            this.bitmap.drawText(text, 8, 40, 16, 16, 'left');
        }
    };



    //-----------------------------------------------------------------------------
    // Sprite_Character
    //

    // メンバ変数の初期化
    var _Sprite_Character_initMembers = Sprite_Character.prototype.initMembers;
    Sprite_Character.prototype.initMembers = function () {
        _Sprite_Character_initMembers.call(this);
        this._damages = [];
        this._message = [];
        this._elementMessage = [];
    };

    // フレーム更新
    var _Sprite_Character_update = Sprite_Character.prototype.update;
    Sprite_Character.prototype.update = function () {
        _Sprite_Character_update.call(this);
        var actor = this._character.isActor();
        if (!actor) return;
        if ($gameSystem._battleActive && !actor.isDead()) {
            this.updateDamagePopup();
            if (useUnitHpGauge) this.updateHpGauge();
            if (useUnitStateIcon) this.updateStateIcon();
            if (useUnitID) this.updateUnitID();
        } else {
            if (this._hpGaugeSprite) {
                this.removeChild(this._hpGaugeSprite);
                this._hpGaugeSprite = null;
            }
            if (this._tpGaugeSprite) {
                this.removeChild(this._tpGaugeSprite);
                this._tpGaugeSprite = null;
            }
            if (this._stateIconSprite) {
                for (var i = 0; i < stateMax; i++) {
                    if (this._stateIconSprite[i]) {
                        this.removeChild(this._stateIconSprite[i]);
                        this.removeChild(this._stateTurnSprite[i]);
                        this.removeChild(this._stateFrameSprite[i]);
                    }
                }
                this._stateIconSprite = null;
                this._stateTurnSprite = null;
                this._stateFrameSprite = null;
            }
            if (this._unitIDSprite) {
                this.removeChild(this._unitIDSprite);
                this._unitIDSprite = null;
            }
        }
    };

    // ダメージポップアップの更新
    Sprite_Character.prototype.updateDamagePopup = function () {
        var battler = this._character.isActor();
        if (battler) {
            this.setupDamagePopup();
            this.setupMessagePopup();
        }
        if (this._damages.length > 0) {
            for (var i = 0; i < this._damages.length; i++) {
                var damage = this._damages[i];
                damage.update();
                damage.x = this.x;
                damage.y = this.y;
            }
            if (!this._damages[0].isPlaying()) {
                this.parent.removeChild(this._damages[0]);
                this._damages.shift();
            }
        }
        if (this._message.length > 0) {
            for (var i = 0; i < this._message.length; i++) {
                var message = this._message[i];
                message.update();
                message.x = this.x;
                message.y = this.y - 32;
            }
            if (!this._message[0].isPlaying()) {
                this.parent.removeChild(this._message[0]);
                this._message.shift();
            }
        }
        if (this._elementMessage.length > 0) {
            for (var i = 0; i < this._elementMessage.length; i++) {
                var elementMessage = this._elementMessage[i];
                elementMessage.update();
                elementMessage.x = this.x;
                elementMessage.y = this.y - 48;
            }
            if (!this._elementMessage[0].isPlaying()) {
                this.parent.removeChild(this._elementMessage[0]);
                this._elementMessage.shift();
            }
        }
    };

    // ダメージポップアップのセット(ダメージと文字のポップは別にした方がいい？)
    Sprite_Character.prototype.setupDamagePopup = function () {
        var battler = this._character.isActor();
        if (battler.isDamagePopupRequested()) {
            var sprite = new Sprite_Damage();
            sprite.x = this.x;
            sprite.y = this.y;
            sprite.z = this.z + 1;
            sprite.setup(battler);
            this._damages.push(sprite);
            this.parent.addChild(sprite);
            battler.clearDamagePopup();
        }
    };
    // 作成中のメッセージポップのセット
    Sprite_Character.prototype.setupMessagePopup = function () {
        var battler = this._character.isActor();
        if (battler.isMessagePopupRequested()) {
            if (battler.isSpriteVisible()) {
                var sprite = new Sprite_PopupMessage();
                sprite.x = this.x;
                sprite.y = this.y - 32;
                sprite.setup(battler);
                if (!sprite.z) {
                    this.setZPositionOfPopup(sprite);
                }
                this._message.push(sprite);
                this.parent.addChild(sprite);
            }
            battler.clearMessagePopup();
        }
        //属性関係のメッセージ
        if (battler.isElementMessagePopupRequested()) {
            if (battler.isSpriteVisible()) {
                var sprite = new Sprite_PopupElementMessage();
                sprite.x = this.x;
                sprite.y = this.y - 48;
                sprite.setup(battler);
                if (!sprite.z) {
                    this.setZPositionOfPopup(sprite);
                }
                this._elementMessage.push(sprite);
                this.parent.addChild(sprite);
            }
            battler.clearElementMessagePopup();
        }
    };

    Sprite_Character.prototype.setZPositionOfPopup = function (sprite) {
        if (this.z > 0) sprite.z = this.z + 10;
        if (this._mainSprite && this._mainSprite.z > 0) sprite.z = this._mainSprite.z + 10;
    };

    // HPゲージの更新
    Sprite_Character.prototype.updateHpGauge = function () {
        var character = this._character.isActor();
        if (character) {
            if (!this._hpGaugeSprite) {
                this._hpGaugeSprite = new Sprite_HpGauge(this._character);
                this._hpGaugeSprite.y = -6;
                this.addChild(this._hpGaugeSprite);
            }
            if (!this._tpGaugeSprite) {
                this._tpGaugeSprite = new Sprite_TpGauge(this._character);
                this._tpGaugeSprite.y = -2;
                this.addChild(this._tpGaugeSprite);
            }
        }
    };

    // ステートアイコンの更新
    Sprite_Character.prototype.updateStateIcon = function () {
        var character = this._character.isActor();
        if (character) {
            if (!this._stateIconSprite) {
                this._stateIconSprite = [];
                this._stateTurnSprite = [];
                this._stateFrameSprite = [];
            }
            for (var i = 0; i < stateMax; i++) {
                if (!this._stateIconSprite[i]) {
                    this._stateIconSprite[i] = new Sprite_StateIcon(i);
                    this._stateIconSprite[i].setup(i, character);
                    this._stateIconSprite[i].y = -60;
                    this._stateIconSprite[i].z = 9;
                    this._stateIconSprite[i].scale.x = 0.5;
                    this._stateIconSprite[i].scale.y = 0.5;
                    this.addChild(this._stateIconSprite[i]);

                    this._stateTurnSprite[i] = new Sprite_StateTurn(i, this._character);
                    this._stateTurnSprite[i].y = -80
                    this._stateTurnSprite[i].z = 9
                    this._stateTurnSprite[i].scale.x = 0.5;
                    this._stateTurnSprite[i].scale.y = 0.5;
                    this.addChild(this._stateTurnSprite[i]);

                    this._stateFrameSprite[i] = new Sprite_StateFrame(i, this._character);
                    this._stateFrameSprite[i].y = -60
                    this._stateFrameSprite[i].z = 9
                    this._stateFrameSprite[i].scale.x = 0.5;
                    this._stateFrameSprite[i].scale.y = 0.5;
                    this.addChild(this._stateFrameSprite[i]);
                } else {
                    var l = character._states.length;
                    this._stateIconSprite[i].x = (i - (l / 2)) * stateIconWidth + 8;
                    this._stateTurnSprite[i].x = (i - (l / 2)) * stateIconWidth + 8;
                    this._stateFrameSprite[i].x = (i - (l / 2)) * stateIconWidth + 8;
                }
            }
        }
    };

    // ユニットIDの更新
    Sprite_Character.prototype.updateUnitID = function () {
        var character = this._character.isActor();
        if (character) {
            if (!this._unitIDSprite) {
                this._unitIDSprite = new Sprite_UnitID(this._character);
                this._unitIDSprite.y = -4;
                this._unitIDSprite.z = 9;
                this._unitIDSprite.scale.x = 0.5;
                this._unitIDSprite.scale.y = 0.5;
                this.addChild(this._unitIDSprite);
            }
        }
    };

    // HPゲージとステートアイコンのbushDepth対応
    var _Sprite_Character_createHalfBodySprites = Sprite_Character.prototype.createHalfBodySprites;
    Sprite_Character.prototype.createHalfBodySprites = function () {
        var flag = !this._upperBody;
        _Sprite_Character_createHalfBodySprites.call(this);
        if (flag) {
            if (this._hpGaugeSprite) this.addChild(this.removeChild(this._hpGaugeSprite));
            if (this._tpGaugeSprite) this.addChild(this.removeChild(this._tpGaugeSprite));
            //if (this._stateIconSprite) this.addChild(this.removeChild(this._stateIconSprite));
            if (this._unitIDSprite) this.addChild(this.removeChild(this._unitIDSprite));
        }
    };

    //-----------------------------------------------------------------------------
    // Sprite_Damage()
    //

    Sprite_Damage.prototype.setup = function (target) {
        var result = target.result();
        if (!result.missed && !result.evaded) {
            if (result.hpAffected) {
                this.createDigits(0, result.hpDamage);
            } else if (target.isAlive() && result.mpDamage !== 0) {
                this.createDigits(2, result.mpDamage);
            }
        }
    };

    Sprite_Damage.prototype.createChildSprite = function () {
        var sprite = new Sprite();
        sprite.bitmap = this._damageBitmap;
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 1;
        sprite.y = -40;
        sprite.ry = sprite.y;
        this.addChild(sprite);
        return sprite;
    };

    Sprite_Damage.prototype.setupFlashEffect = function (flashColor, duration) {
        this._flashColor = flashColor.clone();
        this._flashDuration = duration || paramFlashDuration;
    };

    Sprite_Damage.prototype.isMessage = function () {
        return false;
    };


    //-----------------------------------------------------------------------------
    // Sprite_PopupMessage
    //  

    function Sprite_PopupMessage() {
        this.initialize.apply(this, arguments);
    }

    Sprite_PopupMessage.prototype = Object.create(Sprite_Damage.prototype);
    Sprite_PopupMessage.prototype.constructor = Sprite_PopupMessage;

    Sprite_PopupMessage.prototype.setup = function (target) {
        var text = target.getMessagePopupText();
        var bitmap = this.setupDynamicText(text);
        var sprite = this.createChildSprite();
        sprite.bitmap = bitmap;
        sprite.dy = 0;
        var flashColor = target.getMessagePopupFlashColor();
        if (flashColor) {
            this.setupFlashEffect(flashColor);
        }
        // Resolve conflict for KMS_SomStyleDamage.js
        if (this.setupSomStyleDamageParameter) {
            this.setupSomStyleDamageParameter();
        }
    };

    Sprite_PopupMessage.prototype.setupDynamicText = function (text) {
        var bitmap = new Bitmap(paramMaxWidth, paramFontSize + 8);
        bitmap.fontSize = paramFontSize;
        if (paramUsingItalic) {
            bitmap.fontItalic = true;
        }
        if (paramUsingOutline) {
            bitmap.outlineWidth = Math.floor(bitmap.fontSize / 6);
            bitmap.outlineColor = 'gray';
        }
        bitmap.drawText(text, 0, 0, bitmap.width, bitmap.height, 'center');
        return bitmap;
    };

    Sprite_PopupMessage.prototype.isMessage = function () {
        return true;
    };

    //-----------------------------------------------------------------------------
    // Sprite_PopupElementMessage
    //  

    function Sprite_PopupElementMessage() {
        this.initialize.apply(this, arguments);
    }

    Sprite_PopupElementMessage.prototype = Object.create(Sprite_PopupMessage.prototype);
    Sprite_PopupElementMessage.prototype.constructor = Sprite_PopupElementMessage;

    Sprite_PopupElementMessage.prototype.setup = function (target) {
        var text = target.getElementMessagePopupText();
        var bitmap = this.setupDynamicText(text);
        var sprite = this.createChildSprite();
        sprite.bitmap = bitmap;
        sprite.dy = 0;
        var flashColor = target.getElementMessagePopupFlashColor();
        if (flashColor) {
            this.setupFlashEffect(flashColor);
        }
        // Resolve conflict for KMS_SomStyleDamage.js
        if (this.setupSomStyleDamageParameter) {
            this.setupSomStyleDamageParameter();
        }
    };

    //-----------------------------------------------------------------------------
    // Sprite_HpGauge
    //

    function Sprite_HpGauge() {
        this.initialize.apply(this, arguments);
    }

    Sprite_HpGauge.prototype = Object.create(Sprite.prototype);
    Sprite_HpGauge.prototype.constructor = Sprite_HpGauge;

    Sprite_HpGauge.prototype.initialize = function (character) {
        this._battler = character.isActor();
        Sprite.prototype.initialize.call(this);
        this.bitmap = new Bitmap(32, 4);
        this.z = 9;
        this.anchor.x = 0.5;
        this.anchor.y = 0;
    };

    Sprite_HpGauge.prototype.update = function () {
        Sprite.prototype.update.call(this);
        if (this._hp !== this._battler.hp || this._mhp !== this._battler.mhp) {
            this._hp = this._battler.hp;
            this._mhp = this._battler.mhp;
            this.refresh();
        }
    };

    Sprite_HpGauge.prototype.refresh = function () {
        this.bitmap.clear();
        if (this._hp === 0) return;
        this.bitmap.fillRect(0, 0, 32, 4, '#000000');
        var w = Math.floor(this._hp / this._mhp * 30);
        this.bitmap.fillRect(1, 1, w, 2, this._hp === this._mhp ? '#fff060' : '#ffa030');
    };
    //-----------------------------------------------------------------------------
    // Sprite_TpGauge
    //

    function Sprite_TpGauge() {
        this.initialize.apply(this, arguments);
    }

    Sprite_TpGauge.prototype = Object.create(Sprite.prototype);
    Sprite_TpGauge.prototype.constructor = Sprite_TpGauge;

    Sprite_TpGauge.prototype.initialize = function (character) {
        this._battler = character.isActor();
        Sprite.prototype.initialize.call(this);
        this.bitmap = new Bitmap(32, 4);
        this.z = 9;
        this.anchor.x = 0.5;
        this.anchor.y = 0;
    };

    Sprite_TpGauge.prototype.update = function () {
        Sprite.prototype.update.call(this);
        if (this._tp !== this._battler.tp || this._mtp !== this._battler.maxTp()) {
            this._tp = this._battler.tp;
            this._mtp = this._battler.maxTp();
            this.refresh();
        }
    };

    Sprite_TpGauge.prototype.refresh = function () {
        this.bitmap.clear();
        //if (this._tp === 0) return;
        this.bitmap.fillRect(0, 0, 32, 4, '#000000');
        var w = Math.floor(this._tp / this._mtp * 30);
        this.bitmap.fillRect(1, 1, w, 2, this._tp === this._mtp ? '#5AFF19' : '#008000');
    };

    //-----------------------------------------------------------------------------
    // Sprite_StateIcon
    //(rpg_sprites.jsから流用)
    // The sprite for displaying state icons.

    Sprite_StateIcon.prototype.setup = function (i, battler) {
        this._number = i;
        this._battler = battler;
    };

    Sprite_StateIcon.prototype.updateIcon = function () {
        var icons = [];
        if (this._battler && this._battler.isAlive()) {
            icons = this._battler.allIcons();
        }
        if (icons.length > 0) {
            this._iconIndex = icons[this._number];
        } else {
            this._animationIndex = 0;
            this._iconIndex = 0;
        }
    };

    //-----------------------------------------------------------------------------
    // Sprite_StateTurn
    //

    function Sprite_StateTurn() {
        this.initialize.apply(this, arguments);
    }

    Sprite_StateTurn.prototype = Object.create(Sprite.prototype);
    Sprite_StateTurn.prototype.constructor = Sprite_StateTurn;

    Sprite_StateTurn.prototype.initialize = function (i, character) {
        this._number = i;
        this._battler = character.isActor();
        Sprite.prototype.initialize.call(this);
        this.bitmap = new Bitmap(32, 32);
        this.z = 9;
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this._x = this.anchor.x;
        this._y = this.anchor.y;
        this._maxWidth = 32;
        this._lineHeight = 32;

    };

    Sprite_StateTurn.prototype.update = function () {
        Sprite.prototype.update.call(this);
        var stateId = this._battler._states[this._number];
        this._text = this._battler._stateTurns[stateId];

        this.refresh();
    };

    Sprite_StateTurn.prototype.refresh = function () {
        this.bitmap.clear();
        this.bitmap.drawText(this._text, this._x, this._y, this._maxWidth, this._lineHeight, 'center');
    };

    //-----------------------------------------------------------------------------
    // Sprite_StateFrame
    //

    function Sprite_StateFrame() {
        this.initialize.apply(this, arguments);
    }

    Sprite_StateFrame.prototype = Object.create(Sprite.prototype);
    Sprite_StateFrame.prototype.constructor = Sprite_StateFrame;

    Sprite_StateFrame.prototype.initialize = function (i, character) {
        this._number = i;
        this._battler = character.isActor();
        Sprite.prototype.initialize.call(this);
        this.bitmap = new Bitmap(32, 32);
        this.z = 9;
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this._x = this.anchor.x;
        this._y = this.anchor.y;
        this._maxWidth = 32;
        this._lineHeight = 32;
    };

    Sprite_StateFrame.prototype.update = function () {
        Sprite.prototype.update.call(this);
        this.refresh();
    };

    Sprite_StateFrame.prototype.refresh = function () {
        this.bitmap.clear();
        //以下、解除不能のバフデバフのフレーム化
        if (this._battler.states()[this._number]) {
            if (this._battler.states()[this._number].meta.buffFixed || this._battler.states()[this._number].meta.debuffFixed) {
                this.bitmap.fillRect(0, 0, 32, 4, '#ffffff');
                this.bitmap.fillRect(0, 0, 4, 32, '#ffffff');
                this.bitmap.fillRect(0, 28, 32, 4, '#ffffff');
                this.bitmap.fillRect(28, 0, 4, 32, '#ffffff');
            } else {
                for (var allId = 1; allId < $dataStates.length; allId++) {
                    if (this._battler.isStateAffected(allId)) {
                        if (this._battler.states()[this._number].meta.type == "buff" && $dataStates[allId].meta.buffAllFixed) {
                            this.bitmap.fillRect(0, 0, 32, 4, '#ffffff');
                            this.bitmap.fillRect(0, 0, 4, 32, '#ffffff');
                            this.bitmap.fillRect(0, 28, 32, 4, '#ffffff');
                            this.bitmap.fillRect(28, 0, 4, 32, '#ffffff');
                        }
                        if (this._battler.states()[this._number].meta.type == "debuff" && $dataStates[allId].meta.debuffAllFixed) {
                            this.bitmap.fillRect(0, 0, 32, 4, '#ffffff');
                            this.bitmap.fillRect(0, 0, 4, 32, '#ffffff');
                            this.bitmap.fillRect(0, 28, 32, 4, '#ffffff');
                            this.bitmap.fillRect(28, 0, 4, 32, '#ffffff');
                        }
                    }
                }
            }
        }
    };


    //-----------------------------------------------------------------------------
    // Sprite_UnitID
    //

    function Sprite_UnitID() {
        this.initialize.apply(this, arguments);
    }

    Sprite_UnitID.prototype = Object.create(Sprite.prototype);
    Sprite_UnitID.prototype.constructor = Sprite_UnitID;

    Sprite_UnitID.prototype.initialize = function (character) {
        this._character = character;
        this._battler = character.isActor();
        Sprite.prototype.initialize.call(this);
        this.bitmap = new Bitmap(32, 32);
        this.z = 9;
        this.anchor.x = 1;
        this.anchor.y = 1;
        this._x = this.anchor.x;
        this._y = this.anchor.y;
        this._maxWidth = 32;
        this._lineHeight = 32;

    };

    Sprite_UnitID.prototype.update = function () {
        Sprite.prototype.update.call(this);
        //ユニットのうち死亡ユニットがあった場合
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var id = this._character.unitId;
        this._text = alphabet[id - 1];

        this.refresh();
    };

    Sprite_UnitID.prototype.refresh = function () {
        this.bitmap.clear();
        this.bitmap.drawText(this._text, this._x, this._y, this._maxWidth, this._lineHeight, 'left');
    };


    //-----------------------------------------------------------------------------
    // Sprite_Weapon
    //
    var _Sprite_Weapon_initMembers = Sprite_Weapon.prototype.initMembers;
    Sprite_Weapon.prototype.initMembers = function () {
        _Sprite_Weapon_initMembers.call(this);
        //必要に応じて設定を変える
        //this.x = 0;
        this._character = null;
    };

    //キャラクター設定
    Sprite_Weapon.prototype.setCharacter = function (character) {
        this._character = character;
        this.x = this._character.screenX();
        this.y = this._character.screenY();
        switch (this._character.direction()) {
            case 2, 6:
                this.z = this._character.screenZ() + 2;//5;
                break;
            case 4, 8:
                this.z = this._character.screenZ() - 2;//1;
                break;
        }
    };

    var _Sprite_Weapon_animationWait = Sprite_Weapon.prototype.animationWait;
    Sprite_Weapon.prototype.animationWait = function () {
        if (this._character) {
            return this._character.animationWait();
        } else {
            return 12;
        }
    };

    var _Sprite_Weapon_loadBitmap = Sprite_Weapon.prototype.loadBitmap;
    Sprite_Weapon.prototype.loadBitmap = function () {
        var pageId = this._weaponImageId;//Math.floor((this._weaponImageId - 1) / 12) + 1;
        if (pageId >= 1) {
            this.bitmap = ImageManager.loadSystem('Weapons' + pageId);
        } else {
            this.bitmap = ImageManager.loadSystem('');
        }
    };

    var _Sprite_Weapon_updateFrame = Sprite_Weapon.prototype.updateFrame;
    Sprite_Weapon.prototype.updateFrame = function () {
        if (this._weaponImageId > 0) {
            var index = this._character.direction() / 2 - 1;//(this._weaponImageId - 1) % 12;
            var w = 64;
            var h = 64;
            var sx = this._pattern * w; //(Math.floor(index / 6) * 3 + this._pattern) * w;
            var sy = index * h; //Math.floor(index % 6) * h;
            this.setFrame(sx, sy, w, h);
        } else {
            this.setFrame(0, 0, 0, 0);
        }
    };

    //-----------------------------------------------------------------------------
    // Window_Selectable
    //

    Window_Selectable.prototype.activeOpen = function () {
        this.open();
        this.activate();
    };


    //-----------------------------------------------------------------------------
    // Window_BattleCommand
    //

    function Window_BattleCommand() {
        this.initialize.apply(this, arguments);
    }

    Window_BattleCommand.prototype = Object.create(Window_Command.prototype);
    Window_BattleCommand.prototype.constructor = Window_BattleCommand;

    Window_BattleCommand.prototype.initialize = function () {
        this.clearCommandList();
        var width = this.windowWidth();
        var height = this.windowHeight();
        Window_Selectable.prototype.initialize.call(this, 0, 0, width, height);
        this.select(0);
        this.hide();
        this.deactivate();

    };

    //コマンドリスト
    Window_BattleCommand.prototype.makeCommandList = function (event) {
        //this.setHandler('cancel', this._handlers['cancelOrigin']);
        var actor = event._actor;
        if (actor) {
            for (var i = 0; i < actor._skills.length; i++) {

                //メインアビリティの設定
                if ($dataSkills[actor._skills[i]].stypeId == 1) {
                    event._myAbility[0] = $dataSkills[actor._skills[i]]; //MPを消費するアビリティ
                }
                //サブアビリティの設定
                if ($dataSkills[actor._skills[i]].stypeId == 2) {
                    event._myAbility[1] = $dataSkills[actor._skills[i]]; //MPを消費するアビリティ
                }
                //リミットアビリティの設定
                if ($dataSkills[actor._skills[i]].stypeId == 3) {
                    event._myAbility[2] = $dataSkills[actor._skills[i]]; //TPを消費するアビリティ
                }
            }

            //移動
            if (actor.meetsSkillConditions($dataSkills[2])) {
                if (!event._moved) {
                    this.addCommand("移動", 'move', true);
                } else {
                    this.addCommand("移動やり直し", 'return', true);
                }
            } else {
                this.addCommand("移動", 'move', false);
            }


            //第一アビリティ
            if (event._myAbility[0]) {
                if (actor.meetsSkillConditions(event._myAbility[0])) {
                    this.addCommand(event._myAbility[0].name, 'first', true);
                } else {
                    this.addCommand(event._myAbility[0].name, 'first', false);
                }
            } else {
                this.addCommand("-", 'first', false);
            }

            //第二アビリティ
            if (event._myAbility[1]) {
                if (actor.meetsSkillConditions(event._myAbility[1])) {
                    this.addCommand(event._myAbility[1].name, 'second', true);
                } else {
                    this.addCommand(event._myAbility[1].name, 'second', false);
                }
            } else {
                this.addCommand("-", 'second', false);
            }
            /*
            //第三アビリティ
            if (event.checkSpecialSkill()){
              if (actor.meetsSkillConditions($dataSkills[event.checkSpecialSkill()])) {
                this.addCommand($dataSkills[event.checkSpecialSkill()].name, 'third', true);
              } else {
                this.addCommand($dataSkills[event.checkSpecialSkill()].name, 'third', false);
              }
            }else{
              this.addCommand("-", 'third', false);
            }
            */
            //バーストアビリティ
            if (event._myAbility[2]) {
                if (actor.meetsSkillConditions(event._myAbility[2])) {
                    this.addCommand(event._myAbility[2].name, 'burst', true);
                } else {
                    this.addCommand(event._myAbility[2].name, 'burst', false);
                }
            } else {
                this.addCommand("-", 'burst', false);
            }

            //待機
            this.addCommand("待機", 'wait', true);

            //リスト一覧画面
            this.addCommand("ユニットリスト", 'unitList', true);

            //ステート確認
            this.addCommand("ステート確認", 'checkState', true);

            //ヘルプ表示非表示
            if ($gameSystem.helpShow) {
                this.addCommand("ヘルプ非表示", 'help', true);
            } else {
                this.addCommand("ヘルプ表示", 'help', true);
            }

            this.move(Graphics.boxWidth - 256, 112, 256, this.windowHeight()); //指定した座標へ移動し大きさも変更する
            //描画(されなかった、おそらく呼び出し順？)
            for (var i = 0; i < this.maxItems(); i++) {
                this.drawItem(i);
            }
        }
    };

    Window_BattleCommand.prototype.refresh = function (character) {
        this.clearCommandList();
        this.makeCommandList(character);
        this.createContents();
        Window_Selectable.prototype.refresh.call(this);
    };
    //-----------------------------------------------------------------------------
    // Window_BattleCommandInfo(MP消費量とか)
    //

    function Window_BattleCommandInfo() {
        this.initialize.apply(this, arguments);
    }

    Window_BattleCommandInfo.prototype = Object.create(Window_Base.prototype);
    Window_BattleCommandInfo.prototype.constructor = Window_BattleCommandInfo;

    Window_BattleCommandInfo.prototype.initialize = function () {
        Window_Base.prototype.initialize.call(this, Graphics.boxWidth - 256, 0, 256, 112);
        this.hide();
        //this.setBackgroundType(statusBackground);
        //this.openness = 0;

    };

    Window_BattleCommandInfo.prototype.setSkill = function (skill) {
        if (!skill) return;
        if (this._skill !== skill) {
            this._skill = skill;
            this.refresh();
        }
    };

    //ステートリストの描画
    Window_BattleCommandInfo.prototype.drawItem = function () {
        var skill = this._skill;
        if (!skill) return;
        if (skill.stypeId == 1 || skill.stypeId == 2) {
            this.changeTextColor(this.systemColor());
            this.drawText("消費MP:", 8, 0, 64);
            this.resetTextColor();
            var cost = skill.mpCost;
            this.drawText(cost, 72, 0, 32);
        } else if (skill.stypeId == 3) {
            this.changeTextColor(this.systemColor());
            this.drawText("消費TP:", 8, 0, 64);
            this.resetTextColor();
            var cost = skill.tpCost;
            this.drawText(cost, 72, 0, 32);
        }
        var a = (skill.meta.range || 'diamond 1').split(' ');
        var range = a[1];
        a = (skill.meta.effect || 'diamond 0').split(' ');
        var effect = a[1];
        //射程
        this.changeTextColor(this.systemColor());
        this.drawText("射程:", 112, 0, 64);
        this.resetTextColor();
        this.drawText(range, 176, 0, 32);

        //効果範囲
        this.changeTextColor(this.systemColor());
        this.drawText("範囲:", 8, 40, 64);
        this.resetTextColor();
        if (effect == "self") {
            if (range == 0) {
                this.drawText("自身のみ", 76, 40, 128);
            } else {
                this.drawText("自身から" + range + "マス", 76, 40, 128);
            }
        } else if (effect == 0) {
            this.drawText("対象のみ", 76, 40, 128);
        } else {
            this.drawText("対象から" + effect + "マス", 76, 40, 128);
        }
    };
    Window_BattleCommandInfo.prototype.refresh = function (character, index) {
        this.createContents();
        if (index >= 1 && index <= 3) {
            this.setSkill(character._myAbility[index - 1]);
            this.drawItem();
        }
    };


    //-----------------------------------------------------------------------------
    // Window_DeadUnitList(戦闘不能者を表示するウインドウ)
    //

    function Window_DeadUnitList() {
        this.initialize.apply(this, arguments);
    }

    Window_DeadUnitList.prototype = Object.create(Window_Selectable.prototype);
    Window_DeadUnitList.prototype.constructor = Window_DeadUnitList;

    Window_DeadUnitList.prototype.initialize = function () {

        var width = unitListWidth;
        var height = this.fittingHeight(unitListRows);
        Window_Selectable.prototype.initialize.call(this, Graphics.boxWidth - 256, 0, width, height);
        this.select(0);
        this.hide();
        this.deactivate();

        this.openness = 0;
        this._data = [];
        this._lastindex = this.index();
    };
    Window_DeadUnitList.prototype.update = function () {
        Window_Selectable.prototype.update.call(this);
    };

    Window_DeadUnitList.prototype.lineHeight = function () {
        return commandLineHeight;
    };

    Window_DeadUnitList.prototype.setStatusWindow = function (statusWindow) {
        this._statusWindow = statusWindow;
    };

    Window_DeadUnitList.prototype.maxItems = function () {
        return this._data ? this._data.length : 1;
    };

    //ユニットリストの作成
    Window_DeadUnitList.prototype.item = function () {
        var index = this.index();
        if (this._data && index >= 0) {
            return this._data[index].isActor().isDead() ? this._data[index] : null;
        } else {
            return null;
        }
    };

    //表示されるユニットリストの作成
    Window_DeadUnitList.prototype.makeItemList = function () {
        //this._data = $gameMap.allyDeadUnitList();
        if ($gameSwitches.value(15)) {
            if ($gameSystem.isAllyTeam()) this._data = $gameSystem.allyList();
            else if ($gameSystem.isEnemyTeam()) this._data = $gameSystem.enemyList();
        } else {
            this._data = $gameSystem.allyList();
        }
    };

    //
    Window_DeadUnitList.prototype.selectLast = function () {
        var lastUnit = $gameSystem._unitList[unitListRows];
        var lastIndex = this._data.indexOf(lastUnit);
        this.select(lastIndex >= 0 ? lastIndex : 0);
    };

    //▽選択時の挙動
    Window_DeadUnitList.prototype.onTouch = function (triggered) {
        //var lastIndex = this.index();
        this._lastindex = this.index();
        Window_Selectable.prototype.onTouch.call(this, triggered);
    };

    Window_DeadUnitList.prototype.drawItem = function (index) {
        var item = this._data[index];
        if (!item) return;
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var id = alphabet[item.unitId - 1];
        if (item.isActor().isDead()) {
            this.changePaintOpacity(true);
        } else {
            this.changePaintOpacity(false);
        }
        this.drawText(item.isActor().name() + id, rect.x, rect.y, rect.width);
    };

    Window_DeadUnitList.prototype.refresh = function () {
        this.makeItemList();
        this.createContents();
        this.drawAllItems();
    };

    //-----------------------------------------------------------------------------
    // Window_UnitList(ユニットリストを表示するウインドウ)
    //

    function Window_UnitList() {
        this.initialize.apply(this, arguments);
    }

    Window_UnitList.prototype = Object.create(Window_Selectable.prototype);
    //Window_UnitList.prototype = Object.create(Window_Command.prototype);
    Window_UnitList.prototype.constructor = Window_UnitList;

    Window_UnitList.prototype.initialize = function () {

        var width = unitListWidth;
        var height = this.fittingHeight(unitListRows + 1);
        Window_Selectable.prototype.initialize.call(this, Graphics.boxWidth - 256, 0, width, height);
        this.select(0);
        this.hide();
        this.deactivate();

        this.openness = 0;
        this._data = [];
        this._lastindex = this.index();
        this._stateWindow = null;
    };
    Window_UnitList.prototype.update = function () {
        this._lastindex = this.index();
        Window_Selectable.prototype.update.call(this);
        if ((Input.isRepeated('down') || Input.isRepeated('up')) && this.index() !== this._lastindex) this.changeUnit();
    };

    Window_UnitList.prototype.lineHeight = function () {
        return commandLineHeight;
    };

    Window_UnitList.prototype.setStatusWindow = function (statusWindow) {
        this._statusWindow = statusWindow;
    };

    Window_UnitList.prototype.setStateWindow = function (stateWindow) {
        this._stateWindow = stateWindow;
    };

    Window_UnitList.prototype.maxItems = function () {
        return this._data ? this._data.length : 1;
    };

    //ユニットリストの作成
    Window_UnitList.prototype.item = function () {
        var index = this.index();
        return this._data && index >= 0 ? this._data[index] : null;
    };

    //表示されるユニットリストの作成
    Window_UnitList.prototype.makeItemList = function () {
        this._data = $gameSystem.unitList();
    };

    //▽選択時の挙動
    Window_UnitList.prototype.onTouch = function (triggered) {
        //var lastIndex = this.index();
        this._lastindex = this.index();
        Window_Selectable.prototype.onTouch.call(this, triggered);
        if (this.index() !== this._lastindex) this.changeUnit();
    };

    //ユニット切り替え時の挙動
    Window_UnitList.prototype.changeUnit = function () {
        var unit = this.item();
        if (unit) {
            $gamePlayer.setCameraEvent(unit);   // カメラ移動
            $gameMap.showInvisibleArea(unit);
            this._statusWindow.setUnit(unit);
            this._stateWindow.setActor(unit.isActor());
        } else {
            $gameMap.initColorArea();                // 範囲表示を隠す
            this._statusWindow.close();
            this._stateWindow.close();
        }
    };

    Window_UnitList.prototype.drawItem = function (index) {
        var item = this._data[index];
        if (!item) return;
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var id = alphabet[item.unitId - 1];
        this.drawText(item.isActor().name() + id, rect.x, rect.y, rect.width);
    };

    Window_UnitList.prototype.refresh = function () {
        this.makeItemList();
        this.createContents();
        this.drawAllItems();
    };

    //-----------------------------------------------------------------------------
    // Window_YesNoCommand
    //

    function Window_YesNoCommand() {
        this.initialize.apply(this, arguments);
    }

    Window_YesNoCommand.prototype = Object.create(Window_Command.prototype);
    Window_YesNoCommand.prototype.constructor = Window_YesNoCommand;

    Window_YesNoCommand.prototype.initialize = function () {
        this.clearCommandList();
        var width = this.windowWidth();
        var height = this.windowHeight();
        Window_Selectable.prototype.initialize.call(this, 0, 0, width, height);
        this.select(0);
        this.hide();
        this.deactivate();

    };

    //YesNoリスト
    Window_YesNoCommand.prototype.makeYesNoCommandList = function () {
        //this.setHandler('cancel', this._handlers['noCommand']);
        this.addCommand("実行", 'yesCommand', true);
        this.addCommand("キャンセル", 'noCommand', true);
        var width = this.windowWidth();
        this.move(Graphics.boxWidth - width, 0, width, this.windowHeight());
    };

    Window_YesNoCommand.prototype.refresh = function () {
        this.clearCommandList();
        this.makeYesNoCommandList();
        this.createContents();
        Window_Selectable.prototype.refresh.call(this);
    };


    //-----------------------------------------------------------------------------
    // Window_BattleStatus(敵ターゲットに攻撃する際に表示されるウインドウ)
    //

    function Window_BattleStatus() {
        this.initialize.apply(this, arguments);
    }

    Window_BattleStatus.prototype = Object.create(Window_Base.prototype);
    Window_BattleStatus.prototype.constructor = Window_BattleStatus;

    Window_BattleStatus.prototype.initialize = function () {
        var width = Graphics.boxWidth;
        var height = this.fittingHeight(4);
        var y = Graphics.boxHeight - height;
        Window_Base.prototype.initialize.call(this, 0, y, width, height);
        this.setBackgroundType(statusBackground);
        this.openness = 0;
        this.createFaceSprites();
        this.createArrowSprite();
        this._user = null;
        this._target = null;
        this._stateWindow = null;
    };
    Window_BattleStatus.prototype.setStateWindow = function (stateWindow) {
        this._stateWindow = stateWindow;
    };
    Window_BattleStatus.prototype.createFaceSprites = function () {
        var faceWidth = Window_Base._faceWidth;
        this._userFaceSprite = new Sprite();
        this._userFaceSprite.anchor.x = 0.5;
        this._userFaceSprite.x = this.standardPadding() + faceWidth / 2;
        this._userFaceSprite.y = this.standardPadding();
        if (statusFaceMirror === 'left') {
            this._userFaceSprite.scale.x = -1.0;
        }
        this.addChildAt(this._userFaceSprite, 2);
        this._targetFaceSprite = new Sprite();
        this._targetFaceSprite.anchor.x = 0.5;
        this._targetFaceSprite.x = this.width - faceWidth / 2 - this.standardPadding();
        this._targetFaceSprite.y = this.standardPadding();
        if (statusFaceMirror === 'right') {
            this._targetFaceSprite.scale.x = -1.0;
        }
        this.addChildAt(this._targetFaceSprite, 2);
    };

    Window_BattleStatus.prototype.createArrowSprite = function () {
        this._arrowSprite = new Sprite();
        this._arrowSprite.anchor.x = 0.5;
        this._arrowSprite.anchor.y = 0.5;
        this._arrowSprite.x = this.width / 2;
        this._arrowSprite.y = this.height / 2 + this.lineHeight() / 2;
        this._arrowSprite.bitmap = ImageManager.loadSystem(statusArrowImage);
        this.addChild(this._arrowSprite);
    };

    //自身のステータスを表示(ターゲット設定しないとエラーが表示される？)
    Window_BattleStatus.prototype.setUnit = function (user) {
        if (user) {
            this.open();
        } else {
            this.close();
        }
        if (this._user === user && this._target == null) return;
        this._user = user;
        this._target = null;
        this.refresh();
    };

    //ターゲットのステータスを表示
    Window_BattleStatus.prototype.setAction = function (actionObject, target) {
        this._actionObject = actionObject;
        this._target = target;
        var userBattler = this._user.isActor();
        userBattler.clearActions();
        var action = new Game_Action(userBattler); //ここでもEnemyは通さない
        action.setItemObject(this._actionObject);
        userBattler.setAction(0, action);
        this.refresh();

    };

    Window_BattleStatus.prototype.user = function () {
        return this._user;
    };

    Window_BattleStatus.prototype.target = function () {
        return this._target;
    };

    var _Window_BattleStatus_update = Window_BattleStatus.prototype.update;
    Window_BattleStatus.prototype.update = function () {
        _Window_BattleStatus_update.call(this);
        this._userFaceSprite.opacity = this.contentsOpacity;
        this._targetFaceSprite.opacity = this.contentsOpacity;
        this.updateArrowSprite();
    };

    // 矢印スプライトの更新
    Window_BattleStatus.prototype.updateArrowSprite = function () {
        if (this._arrowSprite.visible) {
            var n = Graphics.frameCount % 30;
            var shiftX = Math.sin(Math.PI * 2 * n / 60) * 36 - 18;
            this._arrowSprite.x = this.width / 2 + shiftX;
        }
    };

    // アクターかエネミーか
    Window_BattleStatus.prototype.isActor = function (user) {
        if (user._actor) {
            return user._actor;
        }
    };

    Window_BattleStatus.prototype.refresh = function () {
        this.contents.clear();
        if (!this._user) return;
        var userBattler = this._user.isActor();
        var lineHeight = this.lineHeight();
        var x = this.textPadding();
        var w = this.textWidth(TextManager.levelA);
        this.changeTextColor(this.systemColor());
        this.resetTextColor();
        this.drawText(userBattler.name(), x, 0, statusNameWidth);
        this.drawActorCharacter(userBattler, x + w, lineHeight * 4);

        this.drawActorGauges(userBattler, Window_Base._faceWidth, lineHeight * 2);
        if (this._target) {
            this._stateWindow.hide();
            this.refreshTarget();
            this.refreshAction();
            //this._targetFaceSprite.visible = true;
            this._arrowSprite.visible = true;
        } else {
            this._stateWindow.show();
            this._arrowSprite.visible = false;
        }
    };

    Window_BattleStatus.prototype.refreshTarget = function () {
        var targetBattler = this._target.isActor();
        var lineHeight = this.lineHeight();
        var faceWidth = Window_Base._faceWidth;
        var x = this.contents.width - faceWidth;
        var w = this.textWidth(TextManager.levelA);
        x = this.contents.width - this.textPadding();
        this.changeTextColor(this.systemColor());
        this.resetTextColor();
        this.drawText(targetBattler.name(), x - statusNameWidth, 0,
            statusNameWidth, 'right');
        x = this.contents.width - faceWidth - statusHpWidth;
        this.drawActorCharacter(targetBattler, this.contents.width - 64, lineHeight * 4);
        this.drawActorGauges(targetBattler, x, lineHeight * 2);
    };

    Window_BattleStatus.prototype.refreshAction = function () {
        var userBattler = this._user.isActor();
        var targetBattler = this._target.isActor();
        var action = userBattler.currentAction();
        var faceWidth = Window_Base._faceWidth;
        var w = this.contents.width - faceWidth * 2;
        var lineHeight = this.lineHeight();
        this.drawText(action.item().name, faceWidth, 0, w, 'center');
        var damageText = this.makeDamageText(targetBattler, action);
        this.drawText(damageText, faceWidth, lineHeight * 1, w, 'center');
    };

    // 結果予測テキストを作成
    Window_BattleStatus.prototype.makeDamageText = function (targetBattler, action) {
        if (action.isSkill() && action.item().id === checkSkillId) return '????(100%)';
        var result = '';
        var hit = action.itemHit(targetBattler);
        var eva = action.itemEva(targetBattler);
        var cnt = action.itemCnt(targetBattler);
        var mrf = action.itemMrf(targetBattler);
        hit = Math.floor((hit * (1 - eva)) * 100);
        if (action.checkDamageType([0])) {
            var effect = action.itemValidEffect(targetBattler);
            result = this.makeEffectText(targetBattler, effect, hit);
        } else {
            var damage = -action.makeDamageValue(targetBattler, true);

            if (action.isHpEffect()) {
                result = TextManager.hpA;
            } else if (action.isMpEffect()) {
                result = TextManager.mpA;
            }

            result += (damage >= 0 ? '+' : '') + damage + '(' + hit + '%)';
        }
        if (cnt > 0) result += ' / 反撃(' + Math.floor(cnt * 100) + '%)';
        if (mrf > 0) result += ' / 反射(' + Math.floor(mrf * 100) + '%)';
        return result;
    };

    // 結果予測テキストを作成
    Window_BattleStatus.prototype.makeEffectText = function (targetBattler, effect, hit) {
        if (!effect) return '';
        switch (effect.code) {
            case Game_Action.EFFECT_RECOVER_HP:       // HP回復
                var n = targetBattler.mhp * effect.value1 + effect.value2;
                return TextManager.hpA + (n >= 0 ? '+' : '') + n;
            case Game_Action.EFFECT_RECOVER_MP:       // MP回復
                var n = targetBattler.mmp * effect.value1 + effect.value2;
                return TextManager.mpA + (n >= 0 ? '+' : '') + n;
            case Game_Action.EFFECT_GAIN_TP:          // TP増加
                return TextManager.tpA + (effect.value1 >= 0 ? '+' : '') + effect.value1;
            case Game_Action.EFFECT_ADD_STATE:        // ステート付加
                var stateId = effect.dataId;
                return $dataStates[stateId].name + '付加' + '(' + hit + '%)';
            default:
                return '';
        }
    };

    Window_BattleStatus.prototype.spacing = function () {
        return 80;
    };
    Window_BattleStatus.prototype.setFaceSprite = function (battler, sprite) {
        var faceName = battler.faceName();
        var faceIndex = battler.faceIndex();
        var faceWidth = Window_Base._faceWidth;
        var faceHeight = Window_Base._faceHeight;
        sprite.bitmap = ImageManager.loadFace(faceName);
        sprite.setFrame(faceIndex % 4 * faceWidth, Math.floor(faceIndex / 4) * faceHeight,
            faceWidth, faceHeight);
    };

    Window_BattleStatus.prototype.drawActorGauges = function (actor, x, y) {
        this.drawActorHp(actor, x, y, statusHpWidth);
        y += this.lineHeight();
        if ($dataSystem.optDisplayTp) {
            var w = statusHpWidth / 2 - 4;
            this.drawActorMp(actor, x, y, w);
            this.drawActorTp(actor, x + w + 8, y, w);
        } else {
            this.drawActorMp(actor, x, y, statusHpWidth);
        }
    };
    //-----------------------------------------------------------------------------
    // Window_BattleState
    //
    function Window_BattleState() {
        this.initialize.apply(this, arguments);
    }

    Window_BattleState.prototype = Object.create(Window_Selectable.prototype);
    Window_BattleState.prototype.constructor = Window_BattleState;

    Window_BattleState.prototype.initialize = function (x, y, width, height) {
        var width = Graphics.boxWidth / 2;
        var height = this.fittingHeight(4);
        var y = Graphics.boxHeight - height;
        Window_Selectable.prototype.initialize.call(this, Graphics.boxWidth / 2, y, width, height);
        this._data = [];
        this.deactivate();
        this.hide();
        this._index = -1;
        this.setBackgroundType(statusBackground);
        //this.openness = 0;
    };

    Window_BattleState.prototype.setActor = function (actor) {
        if (this._actor !== actor) {
            this._actor = actor;
            this.refresh();
        }
    };

    Window_BattleState.prototype.maxCols = function () {
        return 1;
    };

    Window_BattleState.prototype.spacing = function () {
        return 80;
    };

    Window_BattleState.prototype.maxItems = function () {
        return this._data ? this._data.length : 1;
    };

    Window_BattleState.prototype.item = function () {
        return this._data && this.index() >= 0 ? this._data[this.index()] : null;
    };

    //ステートリストの作成
    Window_BattleState.prototype.makeItemList = function () {
        this._data = [];
        for (var id = 1; id < $dataStates.length; id++) {
            if (this._actor.isStateAffected(id)) {
                this._data.push($dataStates[id]);
            }
        }
    };

    //ステートリストの描画
    Window_BattleState.prototype.drawItem = function () {
        //this.contents.clear();
        var iconBoxWidth = Window_Base._iconWidth + 4;
        var lineHeight = this.lineHeight();
        var i = 0;
        for (var id = 1; id < $dataStates.length; id++) {
            if (this._actor.isStateAffected(id)) {
                var x = 8;
                var y = lineHeight * i;
                var state = $dataStates[id];
                var icon = state.iconIndex;
                var name = state.name //名前
                var turn = this._actor._stateTurns[id]; //ステートの期間
                this.drawIcon(icon, x + 2, y); //アイコンの描画
                this.drawText(name, x + iconBoxWidth, y, this.spacing() * 2); //ステートの名前の描画
                this.changeTextColor(this.systemColor());
                this.drawText("残り:", x + iconBoxWidth + this.spacing() * 2, y, this.spacing(), "right");
                this.resetTextColor();
                this.drawText(turn + "act", x + iconBoxWidth + this.spacing() * 3, y, this.spacing(), "left"); //ステートの期間の描画
                //以下、解除不能のバフデバフのフレーム化
                if (state.meta.buffFixed || state.meta.debuffFixed) {
                    this.contents.fillRect(x + 2, y, 32, 4, '#ffffff');
                    this.contents.fillRect(x + 2, y, 4, 32, '#ffffff');
                    this.contents.fillRect(x + 2, y + 28, 32, 4, '#ffffff');
                    this.contents.fillRect(x + 30, y, 4, 32, '#ffffff');
                } else {
                    for (var allId = 1; allId < $dataStates.length; allId++) {
                        if (this._actor.isStateAffected(allId)) {
                            if (state.meta.type == "buff" && $dataStates[allId].meta.buffAllFixed) {
                                this.contents.fillRect(x + 2, y, 32, 4, '#ffffff');
                                this.contents.fillRect(x + 2, y, 4, 32, '#ffffff');
                                this.contents.fillRect(x + 2, y + 28, 32, 4, '#ffffff');
                                this.contents.fillRect(x + 30, y, 4, 32, '#ffffff');
                            }
                            if (state.meta.type == "debuff" && $dataStates[allId].meta.debuffAllFixed) {
                                this.contents.fillRect(x + 2, y, 32, 4, '#ffffff');
                                this.contents.fillRect(x + 2, y, 4, 32, '#ffffff');
                                this.contents.fillRect(x + 2, y + 28, 32, 4, '#ffffff');
                                this.contents.fillRect(x + 30, y, 4, 32, '#ffffff');
                            }
                        }
                    }
                }

                i++;
            }
        }
    };

    Window_BattleState.prototype.updateHelp = function () {
        this.setHelpWindowItem(this.item());
    };
    Window_BattleState.prototype.refresh = function () {
        this.contents.clear();
        if (this._actor) {
            this.makeItemList();
            this.drawItem();
        }
    };
    //-----------------------------------------------------------------------------
    // Window_Menu
    //
    var _Window_MenuStatus_drawItemImage = Window_MenuStatus.prototype.drawItemImage;
    Window_MenuStatus.prototype.drawItemImage = function (index) {
        var actor = $gameParty.members()[index];
        var rect = this.itemRect(index);
        this.changePaintOpacity(actor.isBattleMember());
        this.drawActorCharacter(actor, rect.x + 50, rect.y + 120);
        //this.drawActorCharacter (actor, 50, 100);
        this.changePaintOpacity(true);
    };

    var _Window_MenuStatus_drawItemStatus = Window_MenuStatus.prototype.drawItemStatus;
    Window_MenuStatus.prototype.drawItemStatus = function (index) {
        var actor = $gameParty.members()[index];
        var rect = this.itemRect(index);
        var x = rect.x;// + 162;
        var y = rect.y;// + rect.height / 2 - this.lineHeight() * 1.5;
        var width = rect.width;// - x - this.textPadding();
        this.drawActorSimpleStatus(actor, x, y, width);
    };

    var _Window_MenuStatus_maxCols = Window_MenuStatus.prototype.maxCols;
    Window_MenuStatus.prototype.maxCols = function () {
        return 2;
    };

    var _Window_MenuStatus_drawActorSimpleStatus = Window_MenuStatus.prototype.drawActorSimpleStatus;
    Window_MenuStatus.prototype.drawActorSimpleStatus = function (actor, x, y, width) {
        var lineHeight = this.lineHeight();
        var x2 = x + width / 2;
        var width2 = width / 2;//Math.min(200, width - 180 - this.textPadding());
        this.drawActorName(actor, x, y);
        this.drawActorLevel(actor, x, y + lineHeight * 1);
        //this.drawActorIcons(actor, x, y + lineHeight * 2);
        //this.drawActorClass(actor, x2, y);
        this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
        this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
    };

    var _Window_MenuStatus_drawActorLevel = Window_MenuStatus.prototype.drawActorLevel;
    Window_MenuStatus.prototype.drawActorLevel = function (actor, x, y) {
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.levelA, x, y, 48);
        this.resetTextColor();
        this.drawText(actor.level, x + 32, y, 36, 'right');
    };

    //-----------------------------------------------------------------------------
    // Window_ItemCategory
    //
    // The window for selecting a category of items on the item and shop screens.

    //アイテムカテゴリ修正
    var _Window_ItemCategory_makeCommandList = Window_ItemCategory.prototype.makeCommandList;
    Window_ItemCategory.prototype.makeCommandList = function () {
        //this.addCommand(TextManager.item,    'item');
        this.addCommand(TextManager.weapon, 'weapon');
        this.addCommand(TextManager.armor, 'armor');
        this.addCommand(TextManager.keyItem, 'keyItem');
    };

    //-----------------------------------------------------------------------------
    // Window_StatusCategory
    //ステータス画面内のスキルとステータスを選択するための画面
    //
    function Window_StatusCategory() {
        this.initialize.apply(this, arguments);
    }

    Window_StatusCategory.prototype = Object.create(Window_HorzCommand.prototype);
    Window_StatusCategory.prototype.constructor = Window_StatusCategory;

    Window_StatusCategory.prototype.initialize = function () {
        Window_HorzCommand.prototype.initialize.call(this, 0, 0);
    };

    Window_StatusCategory.prototype.windowWidth = function () {
        return Graphics.boxWidth;
    };

    Window_StatusCategory.prototype.maxCols = function () {
        return 3;
    };

    Window_StatusCategory.prototype.update = function () {
        Window_HorzCommand.prototype.update.call(this);
        //if (this._statusWindow) {
        //    this._statusWindow.setCategory(this.currentSymbol());
        //}
    };

    Window_StatusCategory.prototype.makeCommandList = function () {
        this.addCommand("使用スキル", 'skill');
        this.addCommand("付与されたステート", 'granted');
        this.addCommand("関連ステート", 'relating');
    };


    //-----------------------------------------------------------------------------
    // Window_SkillInfo
    //
    function Window_SkillInfo() {
        this.initialize.apply(this, arguments);
    }

    Window_SkillInfo.prototype = Object.create(Window_Selectable.prototype);
    Window_SkillInfo.prototype.constructor = Window_SkillInfo;

    Window_SkillInfo.prototype.initialize = function (x, y, width, height) {
        Window_Selectable.prototype.initialize.call(this, x, y, width, height);
        //this._actor = null;
        this._data = [];
        this.deactivate();
        this._index = 0;
        //this.refresh();
    };

    Window_SkillInfo.prototype.setActor = function (actor) {
        if (this._actor !== actor) {
            this._actor = actor;
            this.refresh();
            //this.resetScroll();
        }
    };

    Window_SkillInfo.prototype.maxCols = function () {
        return 1;
    };

    Window_SkillInfo.prototype.spacing = function () {
        return 80;
    };

    Window_SkillInfo.prototype.maxItems = function () {
        return this._data ? this._data.length : 1;
    };

    Window_SkillInfo.prototype.item = function () {
        return this._data && this.index() >= 0 ? this._data[this.index()] : null;
    };

    //スキルリストの作成
    Window_SkillInfo.prototype.makeItemList = function () {
        for (var i = 0; i < this._actor.skills().length; i++) {
            this._data.push(this._actor.skills()[i]);//持ってるスキルを配列内に組み込む
        }
    };

    //スキルリストの描画
    Window_SkillInfo.prototype.drawItem = function (x, y) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        var lineHeight = this.lineHeight();
        this.resetTextColor();
        for (var i = 0; i < this._actor.skills().length; i++) {
            var skill = this._actor.skills()[i];//$dataSkills[this._actor.skills()[i]];
            var icon = skill.iconIndex;
            var name = skill.name
            var mpCost = skill.mpCost;//this._actor.skillMpCost(skill);
            var tpCost = skill.tpCost;//this._actor.skillMpCost(skill);
            var a = (skill.meta.range || 'diamond 1').split(' ');
            var range = a[1];
            a = (skill.meta.effect || 'diamond 0').split(' ');
            var effect = a[1];

            var y2 = y + lineHeight * i;
            this.drawIcon(icon, x + 2, y2); //アイコンの描画
            this.drawText(name, x + iconBoxWidth, y2, this.spacing() * 2); //スキルの名前の描画
            this.changeTextColor(this.systemColor());
            //リキャストアビリティは消費MPを表示しない
            switch (skill.stypeId) {
                case 1:
                case 2:
                    this.drawText("消費MP:", x + iconBoxWidth + this.spacing() * 2, y2, this.spacing(), "right"); //スキルの消費MPの描画
                    this.resetTextColor();
                    this.drawText(mpCost, x + iconBoxWidth + this.spacing() * 3, y2, this.spacing(), "left"); //スキルの消費MPの描画
                    break;
                case 3:
                    this.drawText("消費TP:", x + iconBoxWidth + this.spacing() * 2, y2, this.spacing(), "right"); //スキルの消費MPの描画
                    this.resetTextColor();
                    this.drawText(tpCost, x + iconBoxWidth + this.spacing() * 3, y2, this.spacing(), "left"); //スキルの消費MPの描画
                    break;
                case 4:
                    this.drawText("特殊アビ", x + iconBoxWidth + this.spacing() * 2, y2, this.spacing() * 2, "left");
                    break;
                case 5:
                    this.drawText("追撃", x + iconBoxWidth + this.spacing() * 2, y2, this.spacing() * 2, "left");
                    break;
                case 6:
                    this.drawText("カウンター", x + iconBoxWidth + this.spacing() * 2, y2, this.spacing() * 2, "left");
                    break;
                case 7:
                    this.drawText("迎撃", x + iconBoxWidth + this.spacing() * 2, y2, this.spacing() * 2, "left");
                    break;
                case 8:
                    this.drawText("トラップ", x + iconBoxWidth + this.spacing() * 2, y2, this.spacing() * 2, "left");
                    break;
                case 9:
                    this.drawText("追撃(連携)", x + iconBoxWidth + this.spacing() * 2, y2, this.spacing() * 2, "left");
                    break;
                case 10:
                    this.drawText("反撃(連携)", x + iconBoxWidth + this.spacing() * 2, y2, this.spacing() * 2, "left");
                    break;
                case 11:
                    this.drawText("フリーファイト", x + iconBoxWidth + this.spacing() * 2, y2, this.spacing() * 2, "left");
                    break;
                case 12:
                    this.drawText("追撃カウンター", x + iconBoxWidth + this.spacing() * 2, y2, this.spacing() * 2, "left");
                    break;
                case 13:
                    this.drawText("追撃迎撃", x + iconBoxWidth + this.spacing() * 2, y2, this.spacing() * 2, "left");
                    break;
            }
            //射程
            if (skill.stypeId <= 4) {
                this.changeTextColor(this.systemColor());
                this.drawText("射程:", x + iconBoxWidth + this.spacing() * 4, y2, this.spacing(), "right");
                this.resetTextColor();
                this.drawText(range, x + iconBoxWidth + this.spacing() * 5, y2, this.spacing(), "left");
            }
            //効果範囲
            this.changeTextColor(this.systemColor());
            this.drawText("範囲:", x + iconBoxWidth + this.spacing() * 6, y2, this.spacing(), "right");
            this.resetTextColor();
            if (effect == "self") {
                if (range == 0) {
                    this.drawText("自身のみ", x + iconBoxWidth + this.spacing() * 7, y2, this.spacing() * 2, "left");
                } else {
                    this.drawText("自身から" + range + "マス", x + iconBoxWidth + this.spacing() * 7, y2, this.spacing() * 2, "left");
                }
            } else if (effect == 0) {
                this.drawText("対象のみ", x + iconBoxWidth + this.spacing() * 7, y2, this.spacing() * 2, "left");
            } else {
                this.drawText("対象から" + effect + "マス", x + iconBoxWidth + this.spacing() * 7, y2, this.spacing() * 2, "left");
            }
        }
    };

    Window_SkillInfo.prototype.updateHelp = function () {
        this.setHelpWindowItem(this.item());
    };

    Window_SkillInfo.prototype.refresh = function () {
        this.makeItemList();
        this.drawItem(0, 0);
        //this.drawItem(48, 0);
        //indexごとに効果範囲や説明文が変更されるような処理がしたい
        //this.createContents();
        //this.drawAllItems();
    };

    //-----------------------------------------------------------------------------
    // Window_StatusInfo
    //
    function Window_StatusInfo() {
        this.initialize.apply(this, arguments);
    }

    Window_StatusInfo.prototype = Object.create(Window_Selectable.prototype);
    Window_StatusInfo.prototype.constructor = Window_StatusInfo;

    Window_StatusInfo.prototype.initialize = function (x, y, width, height) {
        Window_Selectable.prototype.initialize.call(this, x, y, width, height);
        //this._actor = null;
        this._data = [];
        this.deactivate();
        this.hide();
        this._index = 0;
        //this.refresh();
    };

    Window_StatusInfo.prototype.setActor = function (actor) {
        if (this._actor !== actor) {
            this._actor = actor;
            this.refresh();
            //this.resetScroll();
        }
    };

    Window_StatusInfo.prototype.maxCols = function () {
        return 1;
    };

    Window_StatusInfo.prototype.spacing = function () {
        return 80;
    };

    Window_StatusInfo.prototype.maxItems = function () {
        return this._data ? this._data.length : 1;
    };

    Window_StatusInfo.prototype.item = function () {
        return this._data && this.index() >= 0 ? this._data[this.index()] : null;
    };

    //ステートリストの作成
    Window_StatusInfo.prototype.makeItemList = function () {

    };

    //ステートリストの描画
    Window_StatusInfo.prototype.drawItem = function (x, y) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        var lineHeight = this.lineHeight();
        for (var i = 0; i < this._data.length; i++) {
            var state = this._data[i];
            var icon = state.iconIndex;
            var name = state.name //名前
            var turn = this._actor._stateTurns[this._data[i].id]; //ステートの期間
            var type = $dataStates[this._data[i].id].meta.type;
            var field = $dataStates[this._data[i].id].meta.field;

            var y2 = y + lineHeight * i;
            this.drawIcon(icon, x + 2, y2); //アイコンの描画
            this.drawText(name, x + iconBoxWidth, y2, this.spacing() * 2); //ステートの名前の描画
            this.changeTextColor(this.systemColor());
            if (parseInt(turn) > 0) {
                this.drawText("残り:", x + iconBoxWidth + this.spacing() * 2, y2, this.spacing(), "right");
                this.resetTextColor();
                this.drawText(turn + "Act", x + iconBoxWidth + this.spacing() * 3, y2, this.spacing(), "left"); //ステートの期間の描画
            }
            this.changeTextColor(this.systemColor());
            this.drawText("タイプ:", x + iconBoxWidth + this.spacing() * 4, y2, this.spacing(), "right");
            this.resetTextColor();
            if (field) {
                this.drawText("バフフィールド", x + iconBoxWidth + this.spacing() * 5, y2, this.spacing(), "left"); //バフフィールド系
                //効果範囲
                this.changeTextColor(this.systemColor());
                this.drawText("効果範囲:", x + iconBoxWidth + this.spacing() * 7, y2, this.spacing(), "right");
                this.resetTextColor();
                this.drawText(field + "マス内", x + iconBoxWidth + this.spacing() * 8, y2, this.spacing(), "left");
            } else {
                if (type == "buff") {
                    this.drawText("バフ", x + iconBoxWidth + this.spacing() * 5, y2, this.spacing(), "left"); //ステートがバフであった場合
                } else if (type == "debuff") {
                    this.drawText("デバフ", x + iconBoxWidth + this.spacing() * 5, y2, this.spacing(), "left"); //ステートがバフであった場合
                }
            }
            //以下、解除不能のバフデバフのフレーム化
            if (state.meta.buffFixed || state.meta.debuffFixed) {
                this.contents.fillRect(x + 2, y2, 32, 4, '#ffffff');
                this.contents.fillRect(x + 2, y2, 4, 32, '#ffffff');
                this.contents.fillRect(x + 2, y2 + 28, 32, 4, '#ffffff');
                this.contents.fillRect(x + 30, y2, 4, 32, '#ffffff');
            }
        }
    };

    Window_StatusInfo.prototype.updateHelp = function () {
        this.setHelpWindowItem(this.item());
    };

    Window_StatusInfo.prototype.refresh = function () {
        this.makeItemList();
        this.drawItem(0, 0);
        //this.drawItem(48, 0);
        //indexごとに効果範囲や説明文が変更されるような処理がしたい
        //this.createContents();
        //this.drawAllItems();
    };
    //-----------------------------------------------------------------------------
    // Window_GrantedStatusInfo
    //
    function Window_GrantedStatusInfo() {
        this.initialize.apply(this, arguments);
    }

    Window_GrantedStatusInfo.prototype = Object.create(Window_StatusInfo.prototype);
    Window_GrantedStatusInfo.prototype.constructor = Window_GrantedStatusInfo;

    //ステートリストの作成
    Window_GrantedStatusInfo.prototype.makeItemList = function () {
        for (var id = 1; id < $dataStates.length; id++) {
            if (this._actor.isStateAffected(id)) {
                this._data.push($dataStates[id]);
            }
        }
    };
    //-----------------------------------------------------------------------------
    // Window_RelatingStatusInfo
    //
    function Window_RelatingStatusInfo() {
        this.initialize.apply(this, arguments);
    }

    Window_RelatingStatusInfo.prototype = Object.create(Window_StatusInfo.prototype);
    Window_RelatingStatusInfo.prototype.constructor = Window_RelatingStatusInfo;

    //ステートリストの作成
    Window_RelatingStatusInfo.prototype.makeItemList = function () {
        if ($dataClasses[this._actor._classId].meta.relatingState) {
            var relatingState = $dataClasses[this._actor._classId].meta.relatingState.split(',');
            for (var id = 0; id < relatingState.length; id++) {
                this._data.push($dataStates[relatingState[id]]);
            }
        }
    };

    //-----------------------------------------------------------------------------
    // Window_ActorInfo(ステータス画面内にて選択したアクターの情報が表示されるウインドウ)
    //

    function Window_ActorInfo() {
        this.initialize.apply(this, arguments);
    }

    Window_ActorInfo.prototype = Object.create(Window_Base.prototype);
    Window_ActorInfo.prototype.constructor = Window_ActorInfo;

    Window_ActorInfo.prototype.initialize = function () {
        var width = Graphics.boxWidth;
        var height = this.fittingHeight(2);
        var y = Graphics.boxHeight - height;
        Window_Base.prototype.initialize.call(this, 0, y, width, height);
        //this.setBackgroundType(statusBackground);
        //this.openness = 0;

    };

    Window_ActorInfo.prototype.setActor = function (actor) {
        if (this._actor !== actor) {
            this._actor = actor;
            this.refresh();
            //this.resetScroll();
        }
    };

    //ステートリストの描画
    Window_ActorInfo.prototype.drawItem = function () {
        var actor = this._actor;
        var lineHeight = this.lineHeight();
        var x = this.textPadding();
        var w = this.textWidth(TextManager.levelA);
        //this.changeTextColor(this.systemColor());
        //this.drawText(TextManager.levelA, x, lineHeight, w);
        //this.resetTextColor();
        //this.drawText(actor.level, x + w, lineHeight, 36, 'right');
        this.drawActorCharacter(actor, x + w, lineHeight * 2);

        for (var i = 0; i < 6; i++) {
            var paramId = i + 2;
            x = i % 3 * 224 + 136;//360;
            var y = lineHeight * Math.floor(i / 3);
            if (i == 5) {
                this.changeTextColor(this.systemColor());
                this.drawText("移動力", x, y, 120);
                this.resetTextColor();
                var move = $dataClasses[this._actor._classId].meta.move; //移動力
                this.drawText(move, x + 120, y, 60, 'right');
            } else {
                this.changeTextColor(this.systemColor());
                this.drawText(TextManager.param(paramId), x, y, 120);
                this.resetTextColor();
                this.drawText(actor.param(paramId), x + 120, y, 60, 'right');
            }
        }
    };


    Window_ActorInfo.prototype.refresh = function () {
        this.drawItem();
    };

    //-----------------------------------------------------------------------------
    // Window_Help
    //

    var _Window_Help_initialize = Window_Help.prototype.initialize;
    Window_Help.prototype.initialize = function (numLines) {
        var width = Graphics.boxWidth;
        var height = this.fittingHeight(numLines || helpWindowLine);
        Window_Base.prototype.initialize.call(this, 0, 0, width, height);
        this._text = '';
    };

    var _Window_Help_setItem = Window_Help.prototype.setItem;
    Window_Help.prototype.setItem = function (item) {
        if (item) {
            if (item.meta.description) {
                this.setText(item.meta.description);
            } else {
                if (item.description) {
                    this.setText(item.description);
                } else {
                    this.setText('');
                }
            }
        } else {
            this.setText('');
        }
    };
    Window_Help.prototype.standardFontSize = function () {
        return 18;
    };
    //-----------------------------------------------------------------------------
    // Window_TitleCommand
    // 
    //
    Window_TitleCommand.prototype.makeCommandList = function () {
        this.addCommand("トレーニング", 'training');
        this.addCommand("オンライン", 'online');
    };

    //-----------------------------------------------------------------------------
    // Scene_Status
    //
    // The scene class of the status screen.

    var _Scene_Status_create = Scene_Status.prototype.create;
    Scene_Status.prototype.create = function () {
        Scene_MenuBase.prototype.create.call(this);
        this.createActorWindow();
        this.createHelpWindow();
        this.createCategoryWindow();
        this.createSkillWindow();
        this.createGrantedStatusWindow();
        this.createRelatingStatusWindow();
    };

    Scene_Status.prototype.createCategoryWindow = function () {
        this._categoryWindow = new Window_StatusCategory();

        this._categoryWindow.setHelpWindow(this._helpWindow);
        this._categoryWindow.y = 0;

        this._categoryWindow.setHandler('skill', this.onCategorySkill.bind(this));
        this._categoryWindow.setHandler('granted', this.onCategoryGrantedStatus.bind(this));
        this._categoryWindow.setHandler('relating', this.onCategoryRelatingStatus.bind(this));
        this._categoryWindow.setHandler('cancel', this.popScene.bind(this));
        this.addWindow(this._categoryWindow);
    };

    Scene_Status.prototype.createActorWindow = function () {
        this._actorWindow = new Window_ActorInfo();
        this._actorWindow.setActor(this._actor);
        this.addWindow(this._actorWindow);
    };

    Scene_Status.prototype.createSkillWindow = function () {
        var wy = this._categoryWindow.y + this._categoryWindow.height;
        var wh = Graphics.boxHeight - wy - this._helpWindow.height - this._actorWindow.height;
        this._skillWindow = new Window_SkillInfo(0, wy, Graphics.boxWidth, wh);
        this._skillWindow.setActor(this._actor);

        this._skillWindow.setHelpWindow(this._helpWindow);

        this._skillWindow.setHandler('cancel', this.onSkillCancel.bind(this));
        this.addWindow(this._skillWindow);
        //this._categoryWindow.setStatusWindow(this._skillWindow);
    };

    Scene_Status.prototype.createGrantedStatusWindow = function () {
        var wy = this._categoryWindow.y + this._categoryWindow.height;
        var wh = Graphics.boxHeight - wy - this._helpWindow.height - this._actorWindow.height;
        this._grantedStatusWindow = new Window_GrantedStatusInfo(0, wy, Graphics.boxWidth, wh);
        this._grantedStatusWindow.setActor(this._actor);

        this._grantedStatusWindow.setHelpWindow(this._helpWindow);
        this._grantedStatusWindow.setHandler('cancel', this.onGrantedStatusCancel.bind(this));
        this.addWindow(this._grantedStatusWindow);
    };

    Scene_Status.prototype.createRelatingStatusWindow = function () {
        var wy = this._categoryWindow.y + this._categoryWindow.height;
        var wh = Graphics.boxHeight - wy - this._helpWindow.height - this._actorWindow.height;
        this._relatingStatusWindow = new Window_RelatingStatusInfo(0, wy, Graphics.boxWidth, wh);
        this._relatingStatusWindow.setActor(this._actor);

        this._relatingStatusWindow.setHelpWindow(this._helpWindow);
        this._relatingStatusWindow.setHandler('cancel', this.onRelatingStatusCancel.bind(this));
        this.addWindow(this._relatingStatusWindow);
    };
    Scene_Status.prototype.createHelpWindow = function () {
        this._helpWindow = new Window_Help();
        this._helpWindow.y = Graphics.boxHeight - this._actorWindow.height - this._helpWindow.height;
        this.addWindow(this._helpWindow);
    };

    Scene_Status.prototype.user = function () {
        var members = $gameParty.movableMembers();
        var bestActor = members[0];
        var bestPha = 0;
        for (var i = 0; i < members.length; i++) {
            if (members[i].pha > bestPha) {
                bestPha = members[i].pha;
                bestActor = members[i];
            }
        }
        return bestActor;
    };
    //カテゴリ「スキル」を選択したときの処理
    Scene_Status.prototype.onCategorySkill = function () {
        this._grantedStatusWindow.hide();
        this._relatingStatusWindow.hide();
        this._categoryWindow.deactivate();
        this._skillWindow.activate();
        this._skillWindow.show();
    };

    //カテゴリ「付与されたステート」を選択したときの処理
    Scene_Status.prototype.onCategoryGrantedStatus = function () {
        this._skillWindow.hide();
        this._relatingStatusWindow.hide();
        this._categoryWindow.deactivate();
        this._grantedStatusWindow.activate();
        this._grantedStatusWindow.show();
    };
    //カテゴリ「関連ステート」を選択したときの処理
    Scene_Status.prototype.onCategoryRelatingStatus = function () {
        this._skillWindow.hide();
        this._grantedStatusWindow.hide();
        this._categoryWindow.deactivate();
        this._relatingStatusWindow.activate();
        this._relatingStatusWindow.show();
    };

    //カテゴリ「スキル」時にキャンセルを押した場合
    Scene_Status.prototype.onSkillCancel = function () {
        this._skillWindow.deactivate();
        this._categoryWindow.activate();
    };

    //カテゴリ「付与されたステート」時にキャンセルを押した場合
    Scene_Status.prototype.onGrantedStatusCancel = function () {
        this._grantedStatusWindow.deactivate();
        this._categoryWindow.activate();
    };

    //カテゴリ「関連ステート」時にキャンセルを押した場合
    Scene_Status.prototype.onRelatingStatusCancel = function () {
        this._relatingStatusWindow.deactivate();
        this._categoryWindow.activate();
    };


    //新規追加部分
    Scene_Status.prototype.updateActor = function () {
        if ($gameSystem.isBattleActivate()) {
            this._actor = $gameTemp._selectUnit.isActor();
        } else {
            this._actor = $gameParty.menuActor();
        }
    };

    Scene_Status.prototype.refreshActor = function () {
        var actor = this.actor();
        this._grantedStatusWindow.setActor(actor);
        this._relatingStatusWindow.setActor(actor);
    };


    //-----------------------------------------------------------------------------
    // Scene_Base
    //

    //パーティー内ですべて戦闘不能状態になるとゲームオーバーになってしまうので、それを回避するため
    var _Scene_Base_checkGameover = Scene_Base.prototype.checkGameover;
    Scene_Base.prototype.checkGameover = function () {
        if ($gameParty.isAllDead()) {
            //SceneManager.goto(Scene_Gameover);
        }
    };
    //-----------------------------------------------------------------------------
    // Scene_Map
    //ルール
    //処理の流れはSceneで取り扱い
    //計算系はここでは取り扱わない
    //-----------------------------------------------------------------------------
    //スイッチや変数ごとにイベントキャラの座標を調整するため
    var _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function () {
        Scene_Base.prototype.start.call(this);
        SceneManager.clearStack();
        if (this._transfer) {
            this.fadeInForTransfer();
            this._mapNameWindow.open();
            $gameMap.autoplay();
        } else if (this.needsFadeIn()) {
            this.startFadeIn(this.fadeSpeed(), false);
        }
        this.menuCalling = false;
        $gameSwitches.setValue(7, true);//ここだけ追加
    };
    /*
    戦闘開始前-----------------------------------------------------------------------------
    */
    //マップシーン移行前(戦闘開始前)処理
    var _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function () {
        _Scene_Map_createAllWindows.call(this);
        //this.createHelpWindow();
        this.createCommandWindow();
        this.createBattleStatusWindow();
        this.createYesNoWindow();
        this.createUnitListWindow();
        this.createDeadUnitListWindow();

    };

    /*
    ウインドウ作成-----------------------------------------------------------------------------
    */
    //ヘルプウインドウ作成
    Scene_Map.prototype.createHelpWindow = function () {
        this._helpWindow = new Window_Help();
        this._helpWindow.openness = 0;
        this.addWindow(this._helpWindow);
    };

    // SRPGヘルプウィンドウを開く
    Scene_Map.prototype.openHelp = function (text, lines) {
        this._helpWindow.setText(text);
        this._helpWindow.move(0, 0, Graphics.boxWidth, this._helpWindow.fittingHeight(lines));
        this._helpWindow.open();
    };

    //コマンドリスト作成
    Scene_Map.prototype.createCommandWindow = function () {
        //アクターコマンドクラスが使えないから新たにwindowを作成する必要あり
        this._helpWindow = new Window_Help();
        this._commandWindow = new Window_BattleCommand();
        this._commandWindow.setHandler('move', this.commandMove.bind(this));
        this._commandWindow.setHandler('first', this.firstAbility.bind(this));
        this._commandWindow.setHandler('second', this.secondAbility.bind(this));
        //this._commandWindow.setHandler('third', this.thirdAbility.bind(this));
        this._commandWindow.setHandler('burst', this.burstAbility.bind(this));
        this._commandWindow.setHandler('wait', this.commandWait.bind(this));
        this._commandWindow.setHandler('unitList', this.commandUnitList.bind(this));
        this._commandWindow.setHandler('checkState', this.commandCheckState.bind(this));
        this._commandWindow.setHandler('help', this.commandHelpShow.bind(this));
        this._commandWindow.setHelpWindow(this._helpWindow);
        this._commandWindow.hideHelpWindow();
        this.addWindow(this._commandWindow);
        this._helpWindow.x = 96;
        this._helpWindow.y = 112;
        this._helpWindow.width = Graphics.boxWidth - this._commandWindow.width - 112;
        this.addWindow(this._helpWindow);
        this._commandInfoWindow = new Window_BattleCommandInfo();
        this.addWindow(this._commandInfoWindow);
    };

    // コマンドウインドウを開ける
    Scene_Map.prototype.openCommandWindow = function () {
        if (!this._commandWindow.active) {
            this._commandWindow.show();
            //this._commandWindow.showHelpWindow();
            this._commandWindow.activate();
            this._commandInfoWindow.show();
            this._commandInfoWindow.activate();
        }
    };

    // コマンドウインドウを更新する
    Scene_Map.prototype.updateCommandWindow = function (character) {
        this._commandWindow.clearCommandList();
        this._commandWindow.refresh(character);
        this._commandInfoWindow.refresh(character, this._commandWindow.index());
        if ($gameSystem.helpShow && $gameSystem._phaseState == 2) {
            this._commandWindow.updateHelp();
            this._commandWindow.showHelpWindow();

            var skill = null
            switch (this._commandWindow.index()) {
                case 0:
                    skill = $dataSkills[2];
                    break;
                case 1:
                    skill = character._myAbility[0];
                    break;
                case 2:
                    skill = character._myAbility[1];
                    break;
                case 3:
                    skill = character._myAbility[2];
                    break;
                case 4:
                    skill = $dataSkills[3];
                    break;
                case 5:
                    skill = $dataSkills[4];
                    break;
                case 6:
                    skill = $dataSkills[5];
                    break;
                case 7:
                    skill = $dataSkills[6];
                    break;
            }
            if (skill) {
                this._commandWindow.setHelpWindowItem(skill);
            } else {
                this._commandWindow.hideHelpWindow();
            }
        } else {
            this._commandWindow.hideHelpWindow();
        }
    };

    // コマンドウインドウを閉じる
    Scene_Map.prototype.closeCommandWindow = function () {
        this._commandWindow.clearCommandList();
        this._commandWindow.hideHelpWindow();
        this._commandWindow.hide();
        this._commandWindow.deactivate();
        this._commandInfoWindow.hide();
        this._commandInfoWindow.deactivate();
    };

    //YesNo選択画面作成
    Scene_Map.prototype.createYesNoWindow = function () {
        //アクターコマンドクラスが使えないから新たにwindowを作成する必要あり
        this._yesNoWindow = new Window_YesNoCommand();
        this._yesNoWindow.setHandler('yesCommand', this.commandYes.bind(this));
        this._yesNoWindow.setHandler('noCommand', this.commandNo.bind(this));
        this.addWindow(this._yesNoWindow);
    };
    // YesNo選択画面を開ける
    Scene_Map.prototype.openYesNoWindow = function () {
        this._yesNoWindow.show();
        this._yesNoWindow.activate();
    };

    // YesNo選択画面を更新する
    Scene_Map.prototype.updateYesNoWindow = function () {
        this._yesNoWindow.clearCommandList();
        this._yesNoWindow.refresh();
    };

    // YesNo選択画面を閉じる
    Scene_Map.prototype.closeYesNoWindow = function () {
        this._yesNoWindow.clearCommandList();
        this._yesNoWindow.hide();
        this._yesNoWindow.deactivate();
    };


    //戦闘用ステータスウインドウ作成
    Scene_Map.prototype.createBattleStatusWindow = function () {
        this._battleStatusWindow = new Window_BattleStatus();
        this.addWindow(this._battleStatusWindow);
        this._battleStateWindow = new Window_BattleState();
        this._battleStateWindow.setHandler('cancel', this.cancelCheckState.bind(this));
        this._battleStateWindow.setHelpWindow(this._helpWindow);
        this._battleStatusWindow.setStateWindow(this._battleStateWindow);
        this.addWindow(this._battleStateWindow);
    };

    // 戦闘用ステータスウインドウを開く
    Scene_Map.prototype.openBattleStatusWindow = function (event) {
        if (!this._battleStatusWindow.isOpen()) {
            this._battleStatusWindow.setUnit(event);
            this._battleStateWindow.setActor(event.isActor());
            this._battleStateWindow.show();
        }
    };
    // 戦闘用ステータスウインドウにてターゲットを設定する
    Scene_Map.prototype.targetBattleStatusWindow = function (skill, target) {
        this._battleStatusWindow.setAction(skill, target);
    };

    // 戦闘用ステータスウインドウを更新する
    Scene_Map.prototype.updateBattleStatusWindow = function () {
        this._battleStateWindow.refresh();
        this._battleStatusWindow.refresh();
        if ($gameSystem.helpShow && $gameSystem._phaseState == 15) {
            this._battleStateWindow.updateHelp();
            this._battleStateWindow.showHelpWindow();
        } else {
            this._battleStateWindow.hideHelpWindow();
        }
    };

    // 戦闘用ステータスウインドウを閉じる
    Scene_Map.prototype.closeBattleStatusWindow = function () {
        this._battleStatusWindow.setUnit(null);
        this._battleStateWindow.setActor(null);
        this._battleStateWindow.hide();
        //this._battleStateWindow.deactivate();
    };

    //ユニットリストウインドウ
    Scene_Map.prototype.createUnitListWindow = function () {
        this._unitListWindow = new Window_UnitList();
        this._unitListWindow.setHandler('ok', this.okUnitList.bind(this));
        this._unitListWindow.setHandler('cancel', this.cancelUnitList.bind(this));
        this._unitListWindow.setStatusWindow(this._battleStatusWindow);
        this._unitListWindow.setStateWindow(this._battleStateWindow);
        this.addWindow(this._unitListWindow);
    };

    // ユニットリストウインドウを開く
    Scene_Map.prototype.openUnitListWindow = function () {
        this._unitListWindow.refresh();
        //this._unitListWindow.selectLast();
        this._unitListWindow.activeOpen();
        this._unitListWindow.show();
        this._unitListWindow.changeUnit();
    };

    // ユニットリストウインドウを更新する
    Scene_Map.prototype.updateUnitListWindow = function () {
        this._unitListWindow.refresh();
        //this._unitListWindow.changeUnit();
    };

    // ユニットリストウインドウを閉じる
    Scene_Map.prototype.closeUnitListWindow = function () {
        this._battleStatusWindow.setUnit(null);
        this._unitListWindow.hide();
        this._unitListWindow.deactivate();
    };

    //戦闘不能者リストウインドウ
    Scene_Map.prototype.createDeadUnitListWindow = function () {
        this._deadUnitListWindow = new Window_DeadUnitList();
        this._deadUnitListWindow.setHandler('ok', this.okDeadUnitList.bind(this));
        this._deadUnitListWindow.setHandler('cancel', this.cancelDeadUnitList.bind(this));
        this._deadUnitListWindow.setStatusWindow(this._battleStatusWindow);
        this.addWindow(this._deadUnitListWindow);
    };

    // 戦闘不能者リストウインドウを開く
    Scene_Map.prototype.openDeadUnitListWindow = function () {
        this._deadUnitListWindow.refresh();
        this._deadUnitListWindow.selectLast();
        this._deadUnitListWindow.activeOpen();
        this._deadUnitListWindow.show();
    };

    // 戦闘不能者リストウインドウを更新する
    Scene_Map.prototype.updateDeadUnitListWindow = function () {
        this._deadUnitListWindow.refresh();
    };

    // 戦闘不能者リストウインドウを閉じる
    Scene_Map.prototype.closeDeadUnitListWindow = function () {
        this._battleStatusWindow.setUnit(null);
        this._deadUnitListWindow.hide();
        this._deadUnitListWindow.deactivate();
    };

    //コマンド発動前確認ウインドウ作成
    Scene_Map.prototype.createSkillWindow = function () {
        var wy = this._helpWindow.height;
        var ww = Graphics.boxWidth / 2;
        var wh = Graphics.boxHeight - wy - this._statusWindow.height;
        this._skillWindow = new Window_SkillList(0, wy, ww, wh);
        this._skillWindow.setHandler('ok', this.okSkill.bind(this));
        this._skillWindow.setHandler('cancel', this.cancelSkill.bind(this));
        this._skillWindow.setHelpWindow(this._helpWindow);
        this.addWindow(this._skillWindow);
    };

    // SRPGスキルウィンドウを開く
    Scene_Map.prototype.openSkillWindow = function (category) {
        //this.areaSelecterDeactivate(true);
        var event = this._statusWindow.user();
        this.openSrpgHelp('', 2);
        this._skillWindow.setActor(event.srpgBattler(), category);
        this._skillWindow.selectLast();
        this._skillWindow.activeOpen();
    };

    /*
    戦闘中-----------------------------------------------------------------------------
    */

    /*
    戦闘中の流れ
    1、戦闘中かどうかのチェック→戦闘中なら次の処理へ
    2、戦闘不能者がいるか、敵か味方が全滅したか
    3、ターンがアクターかエネミーか、どちらでもないか
    4-1、どちらでもない場合、行動順の計算
    4-2、アクターの場合、アクターターン時の処理
    4-3、エネミーの場合、エネミーターン時の処理
    */
    var _Scene_Map_updateMain = Scene_Map.prototype.updateMain;
    Scene_Map.prototype.updateMain = function () {
        _Scene_Map_updateMain.call(this);

        //戦闘不能者がいる場合
        if ($gameTemp.isDeadUnit()) {//ここでこの関数使うのはNG
            this.updateDeadUnit();
            return;
        }
        //戦闘開始準備
        if ($gameTemp._startBattleFlag) {
            this.setStartBattle();
            return;
        }
        if ($gameMap.isUnitAnimationPlaying() || !$gameSystem.isBattleActivate() || $gameMap.isEventRunning()) return; //戦闘中以外、イベント実行中は処理をしない

        if ($gameSwitches.value(15)) {
            if ($gameSystem.isAllyTeam()) {
                //ゲームオーバー判定
                if ($gameMap.updateAllyUnitNums() == 0) {
                    if (!$gameSwitches.value(20)) this.gameOver();
                    return;
                }
                //戦闘終了判定
                if ($gameMap.updateEnemyUnitNums() == 0) {
                    if (!$gameSwitches.value(20)) this.endBattle();
                    return;
                }
            } else if ($gameSystem.isEnemyTeam()) {
                //ゲームオーバー判定
                if ($gameMap.updateEnemyUnitNums() == 0) {
                    if (!$gameSwitches.value(20)) this.gameOver();
                    return;
                }
                //戦闘終了判定
                if ($gameMap.updateAllyUnitNums() == 0) {
                    if (!$gameSwitches.value(20)) this.endBattle();
                    return;
                }
            }
        } else {
            //ゲームオーバー判定
            if ($gameMap.updateAllyUnitNums() == 0) {
                this.gameOver();
                return;
            }
            //戦闘終了判定
            if ($gameMap.updateEnemyUnitNums() == 0) {
                this.endBattle();
                return;
            }
        }

        //予約ターン
        if ($gameTemp.isReservationAction() && !$gameSystem.isAllyTurn() && !$gameSystem.isEnemyTurn()) {
            this.updateReservationTurn(); //予約ターンの更新
            return;
        }
        //WTカウント中状態であった場合
        if ($gameTemp._countWtTime) {
            $gameSystem.countWt();
            return;
        }
        //オンライン対戦の場合
        if ($gameSwitches.value(15)) {
            //敵のターン
            if ($gameSystem.isEnemyTurn()) {
                if ($gameSystem.turnUnit().isActor().checkCtrlGrantor() || $gameSystem.turnUnit().isActor().checkNoCtrlState()) {
                    if ($gameSystem.isAllyTeam()) this.updateAllyTurn();
                    else this.updateSyncTurn();
                } else if ($gameSystem.turnUnit().isActor().checkHateState()) {
                    if ($gameSystem.isEnemyTeam()) this.updateEnemyTurn();
                    else this.updateSyncTurn();
                } else {
                    if ($gameSystem.isEnemyTeam()) this.updateAllyTurn();
                    else this.updateSyncTurn();
                }
                return;
            }
            //味方のターン
            if ($gameSystem.isAllyTurn()) {
                if ($gameSystem.turnUnit().isActor().checkCtrlGrantor() || $gameSystem.turnUnit().isActor().checkNoCtrlState()) {
                    if ($gameSystem.isEnemyTeam()) this.updateAllyTurn();
                    else this.updateSyncTurn();
                } else if ($gameSystem.turnUnit().isActor().checkHateState()) {
                    if ($gameSystem.isAllyTeam()) this.updateEnemyTurn();
                    else this.updateSyncTurn();
                } else {
                    if ($gameSystem.isAllyTeam()) this.updateAllyTurn();
                    else this.updateSyncTurn();
                }
                return;
            }
        } else {
            //敵のターン
            if ($gameSystem.isEnemyTurn()) {
                if ($gameSystem.turnUnit().isActor().checkCtrlGrantor()) {
                    this.updateAllyTurn();
                } else {
                    this.updateEnemyTurn();       // 敵ターンの更新
                }
                return;
            }
            //味方のターン
            if ($gameSystem.isAllyTurn()) {
                if ($gameSystem.turnUnit().isActor().checkHateState() || $gameSystem.turnUnit().isActor().checkCtrlGrantor() || $gameSystem.turnUnit().isActor().checkNoCtrlState()) {
                    this.updateEnemyTurn();
                } else {
                    this.updateAllyTurn();
                }
                return;
            }
        }
    };

    // 味方ターンの更新
    Scene_Map.prototype.updateAllyTurn = function () {
        if ($gameSwitches.value(15)) {
            if ($gameSwitches.value(19) || $gameSwitches.value(20)) return;
        }
        var turnUnit = $gameSystem.turnUnit();
        switch ($gameSystem._phaseState) {
            case 0: //カメラ移動完了後コマンド表示
                $gameMap.initColorArea();
                $gameMap.setMovableArea(turnUnit);
                //カメラが移動中かどうか
                if ($gamePlayer.isStopping() && $gameTemp._cameraWait) {
                    //対象ターン行動フラグ
                    $gameTemp._cameraWait = false;

                    //this.openBattleStatusWindow(turnUnit); //自身のステータスを表示
                    //ターン開始前処理(リジェネ回復など)

                    $gameSystem._phaseState = 1;
                }
                break;
            case 1: //ターン開始前処理(アニメーションを取り扱う)
                //ターン開始前の処理
                $gameSystem.startTurn(turnUnit);
                turnUnit.beforeTurnStart();

                //以下はアニメーション終了後の処理
                $gameMap.setMovableArea(turnUnit);
                //元の座標を記憶
                turnUnit.setFromXy(turnUnit.x, turnUnit.y, turnUnit.direction());
                $gameMap.setInvisibleArea($gameSystem.unitList());
                $gameMap.showInvisibleArea(turnUnit);
                $gameSystem._phaseState = 2;
                break;
            case 2: //コマンド選択＆入力処理
                if (!turnUnit.isActor().canMove()) {
                    $gameSystem._phaseState = 11; //麻痺とかであれば以降の処理は行わず次のターンへ
                    return;
                }
                $gameTemp._commandTime = true;
                this.openCommandWindow();
                this.openBattleStatusWindow(turnUnit);
                this.updateCommandWindow(turnUnit);

                break;
            case 3: //移動選択＆入力処理
                this.closeBattleStatusWindow();
                $gameTemp._commandTime = false;
                this.updateMoveInput();
                break;
            case 4: //移動処理(移動完了したらphaseStateを上げる)
                $gameTemp._commandTime = true;
                if (turnUnit.pos(turnUnit.toX(), turnUnit.toY())) {
                    $gameMap.showInvisibleArea(turnUnit);
                    this.openCommandWindow();
                    this.openBattleStatusWindow(turnUnit);
                    $gameSystem._phaseState = 2;//コマンド選択へ戻る
                } else {
                    //移動中に詰むことがないよう最適ルートを探してから移動
                    this.updateMove();
                }
                break;
            case 5: //対象選択＆入力処理
                this.closeBattleStatusWindow();
                $gameTemp._commandTime = false;
                this.updateTargetInput();
                break;
            case 6: //範囲確認YesNo＆入力処理
                this.openBattleStatusWindow(turnUnit);

                this.targetBattleStatusWindow(turnUnit.useSkill(), turnUnit.target());//ターゲットを表示
                $gameTemp._commandTime = true;
                this.updateYesNoWindow();
                break;
            case 7: //コマンド実行処理(詠唱アニメーション)
                //自身に攻撃アニメーション
                //this.showActionAnimation(turnUnit);

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
                this.showActionMotion(turnUnit);
                $gameSystem._phaseState = 8;
                break;
            case 8: //コマンド実行処理(詠唱アニメーション)
                if ($gameTemp._attackTime == false) {
                    turnUnit.setBattlerReturn();
                    $gameSystem._phaseState = 9;
                }
                break;
            case 9: //コマンド実行処理(対象アニメーション)
                //対象に攻撃アニメーション
                //Game_Eventにて「たたかう」だと対象の装備が反映されたアニメーションが表示される
                turnUnit.target().showActionAnimation(turnUnit, turnUnit.useSkill());  // 行動アニメーションの表示
                //多段ヒット時の設定
                $gameTemp.setMultiHit(turnUnit.useSkill());
                $gameSystem._phaseState = 10;//ダメージ表示フェーズへ移行
                break;
            case 10: //コマンド実行処理(ダメージ表示)
                if (!this.isMultiHitPopWaitingMode()) return;//待ち時間
                turnUnit.executeAction();//アクションの実行
                $gameTemp.countMultiHit();
                if (!$gameTemp.endMultiHit()) return;//ヒットが終わってない場合やり直し
                if ($gameSwitches.value(15)) {
                    $gameSystem.sendInfo(); //オンライン時の処理
                }
                this.updateBattleStatusWindow();//戦闘用ステータスウインドウを更新
                $gameMap.initColorArea();

                $gameSystem._phaseState = 11;//ターン終了後処理へ移行
                break;
            case 11: //ターン終了後処理(アニメーションを取り扱う)
                if ($gameSwitches.value(15)) {
                    if ($gameSwitches.value(28)) return;
                }
                //ターン終了後の処理
                turnUnit.afterTurnEnd();
                //トラップやカウンター発動などあった場合、ダメージとアニメーションを入れたいためもう2フェーズ使用する必要性あり
                $gameSystem._phaseState = 12;//事後処理
                break;
            case 12: //事後処理
                if ($gameSwitches.value(15)) $gameSwitches.setValue(20, true);
                this.endTurn(); //
                if ($gameSwitches.value(15)) {
                    $gameSystem.sendInfo();
                    if ($gameSystem.isAllyTeam()) $gameSwitches.setValue(21, true);
                    else if ($gameSystem.isEnemyTeam()) $gameSwitches.setValue(22, true);
                }
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


    // 敵ターンの更新
    Scene_Map.prototype.updateEnemyTurn = function () {
        if ($gameSwitches.value(15)) {
            if ($gameSwitches.value(19) || $gameSwitches.value(20)) return;
        }
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
                $gameSystem._phaseState = 2;
                break;
            case 2: //試行錯誤
                $gameMap.setInvisibleArea($gameSystem.unitList());
                $gameMap.showInvisibleArea(turnUnit);
                //クラス設定されたタグに合わせてターゲットを変更する
                if (!turnUnit.isActor().canMove()) {
                    //$gameMessage.add("行動不能");
                    SoundManager.playBuzzer();//ブザー
                    //$gameMessage.clear(); //行動不能などのメッセージを消去したい
                    $gameSystem._phaseState = 11; //麻痺とかであれば以降の処理は行わず次のターンへ
                    return;
                }
                //この時点でコマンドもセットする
                $gameSystem._phaseState = 3; //状況によっては5に移行
                break;
            case 3: //移動先選択
                //移動タイルを表示し
                $gameMap.setMovableArea(turnUnit);
                $gameMap.showMovableArea(turnUnit);
                var targetPos = turnUnit.moveToSetting(); //移動先地点を設定する

                if (!turnUnit.isActor().meetsSkillConditions($dataSkills[2]) || targetPos == null) {
                    $gameSystem._phaseState = 5; //移動不可なら対象選択へ
                    return;
                }
                $gamePlayer.setCameraXy(targetPos.x, targetPos.y);

                turnUnit.setToXy(targetPos.x, targetPos.y);

                if ($gameSwitches.value(15)) {
                    $gameSystem.sendInfo(); //オンライン時の処理
                    $gameSwitches.setValue(23, true);
                }
                $gameSystem._phaseState = 4;
                break;
            case 4: //移動処理(移動完了したらphaseStateを上げる)
                if (!this.isMoveWaitingMode()) return;//待ち時間
                //移動処理
                if (turnUnit.pos(turnUnit.toX(), turnUnit.toY())) {
                    $gameMap.initColorArea();
                    turnUnit.endMove();
                    $gameSystem._phaseState = 5;
                } else {
                    this.updateMove();//指定座標へ移動する処理
                }
                break;
            case 5: //対象選択
                turnUnit.skillSelectSetting(); //スキルを設定する
                if (turnUnit.useSkill()) {
                    $gameMap.showRangeArea(turnUnit, null);
                    $gameSystem._phaseState = 6;//範囲確認へ移行
                } else {
                    //待機という扱いになるためMP回復しターン終了
                    this.commandWait();
                }
                break;
            case 6: //範囲確認
                if (!this.isSelectWaitingMode()) return;//待ち時間
                if (turnUnit.target() == null) {
                    this.commandWait();
                    return;
                }
                //対象が範囲内にいた場合行動開始、そうでない場合待機
                if ($gameSystem._moveTargetPointFlag || $gameMap.isInsideArea(turnUnit.target().x, turnUnit.target().y)) {
                    this.targetBattleStatusWindow(turnUnit.useSkill(), turnUnit.target());//ターゲットを表示
                    $gameMap.showEffectArea(turnUnit);//効果範囲表示
                    $gamePlayer.setCameraEvent(turnUnit.target()); //カメラを選択した対象へ回す
                    $gameSystem._phaseState = 7;//対象アニメーションフェーズへ移行
                } else {
                    //待機という扱いになるためMP回復しターン終了
                    this.commandWait();
                }
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
                $gameSystem._phaseState = 9;//対象アニメーションフェーズへ移行
                break;
            case 9: //コマンド実行処理(対象アニメーション)
                //対象に攻撃アニメーション
                //Game_Eventにて「たたかう」だと対象の装備が反映されたアニメーションが表示される
                turnUnit.setBattlerReturn();//攻撃アニメから歩行アニメへ戻す
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

                if ($gameSwitches.value(15)) {
                    $gameSystem.sendInfo(); //オンライン時の処理
                    $gameSwitches.setValue(24, true);
                }
                this.updateBattleStatusWindow();//戦闘用ステータスウインドウを更新
                $gameMap.initColorArea();
                $gameSystem._phaseState = 11;//ターン終了後処理へ移行
                break;
            case 11: //ターン終了後処理(アニメーションを取り扱う)
                if ($gameSwitches.value(15)) {
                    if ($gameSwitches.value(28)) return;
                }
                //ターン終了後の処理
                turnUnit.afterTurnEnd();
                $gameSystem._phaseState = 12;//事後処理
                break;
            case 12: //事後処理
                //ターン終了後の処理
                this.endTurn();
                if ($gameSwitches.value(15)) {
                    $gameSystem.sendInfo();
                    if ($gameSystem.isAllyTeam()) $gameSwitches.setValue(21, true);
                    else if ($gameSystem.isEnemyTeam()) $gameSwitches.setValue(22, true);
                }
                break;
        }
    };

    // 予約ターンの更新
    Scene_Map.prototype.updateReservationTurn = function () {
        var turnUnit = $gameTemp.loadReservationAttackUnit();//予約ターンでは攻撃者のこと
        if ($gameTemp.loadReservationTargetUnit().isActor().isDead() && $gameSystem._phaseState == 0) $gameSystem._phaseState = 11; //追撃前に死亡していた場合、予約ターンを終わらせる(複数ヒットの影響で不具合発生)
        switch ($gameSystem._phaseState) {
            case 0: //カメラ移動完了後コマンド表示
                //同期側がアクション終了していなければ実行できない
                if ($gameSwitches.value(15)) {
                    if ($gameSwitches.value(20)) return;
                }
                $gameMap.initColorArea();
                //カメラが移動中かどうか
                this.openBattleStatusWindow(turnUnit); //自身のステータスを表示
                //ターン開始前処理(リジェネ回復など)
                $gameTemp.startReservationActionTurn();
                $gameSystem._phaseState = 1;
                break;
            case 1: //ターン開始前処理(予約ターンでは不要？)
                //同期側であった場合、一旦ストップ
                if ($gameSwitches.value(15)) {
                    if ($gameSystem.isSyncTurn(turnUnit) && !$gameSwitches.value(26)) return;
                }
                $gameSystem._phaseState = 2;
                break;
            case 2: //スキル予約
                $gameMap.setInvisibleArea($gameSystem.unitList());
                $gameMap.showInvisibleArea(turnUnit);
                turnUnit.setUseSkill($gameTemp.loadReservationUseSkill());
                if ((!turnUnit.isActor().meetsSkillConditions(turnUnit.useSkill())) || (!turnUnit.isActor().canMove())) {
                    //$gameMessage.add("攻撃不可");
                    SoundManager.playBuzzer();//ブザー
                    $gameSystem._phaseState = 11; //スキル使用不可の場合、この後の処理は行わずターン終了する
                    return;
                }
                $gameSystem._phaseState = 3;
                break;
            case 3: //予約ターンではスルー
                $gameSystem._phaseState = 4;
                break;
            case 4: //予約ターンではスルー
                $gameSystem._phaseState = 5;
                break;
            case 5: //対象予約
                turnUnit.setTarget($gameTemp.loadReservationTargetUnit());
                $gameSystem._phaseState = 6;//範囲確認へ移行
                break;
            case 6: //範囲確認(予約ターンでここから処理)
                if (!this.isSelectWaitingMode()) return;//待ち時間
                this.targetBattleStatusWindow(turnUnit.useSkill(), turnUnit.target());//ターゲットを表示
                $gameMap.showEffectArea(turnUnit);//効果範囲表示
                $gamePlayer.setCameraEvent(turnUnit.target()); //カメラを選択した対象へ回す
                $gameSystem._phaseState = 7;//対象アニメーションフェーズへ移行
                break;
            case 7: //コマンド実行処理(詠唱アニメーション)
                //待ち時間(どうやったら組み込めるの？（保留）)
                if (!this.isYesNoWaitingMode()) return;
                this.showActionMotion(turnUnit);
                $gameSystem._phaseState = 9;//対象アニメーションフェーズへ移行
                break;
            case 9: //コマンド実行処理(対象アニメーション)
                //対象に攻撃アニメーション
                //Game_Eventにて「たたかう」だと対象の装備が反映されたアニメーションが表示される
                turnUnit.setBattlerReturn();//攻撃アニメから歩行アニメへ戻す
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
                $gameSystem._phaseState = 12;//ターン終了後処理へ移行
                break;
            case 11: //ターン終了後処理(アニメーションを取り扱う)
                if ($gameSwitches.value(15)) {
                    if ($gameSwitches.value(28)) return;
                }
                $gameSystem._phaseState = 12;//事後処理
                break;
            case 12: //事後処理
                //ターン終了後の処理
                if ($gameSwitches.value(15)) {
                    if ($gameSystem.isSyncTurn(turnUnit)) {
                        $gameSwitches.setValue(20, false);
                        $gameSwitches.setValue(26, false);
                    } else {
                        $gameSwitches.setValue(20, true);
                        $gameSwitches.setValue(26, true);
                    }
                }
                $gameTemp.endReservationActionTurn();
                $gameTemp.removeReservationActionList();//ターン終了前にこのバトルの予約を消さないとループするの削除処理を行う
                this.endTurn(); //
                break;
        }
    };


    // 2,SRPGコマンド【移動】
    Scene_Map.prototype.commandMove = function () {
        var turnUnit = $gameSystem.turnUnit();
        $gameSystem._phaseState = 3;//移動選択
        //コマンドウインドウを閉じる
        this.closeCommandWindow();
        //移動やり直し用
        turnUnit.returnFromXy();

        $gameMap.setMemoryMovableArea();
        $gameMap.showMovableArea(turnUnit);
        //$gameMap.showInvisibleArea(turnUnit);

    };
    // 2,SRPGコマンド【第一アビリティ】
    Scene_Map.prototype.firstAbility = function () {
        var turnUnit = $gameSystem.turnUnit();
        turnUnit.setUseSkill(turnUnit._myAbility[0]);
        //コマンドウインドウを閉じる
        this.closeCommandWindow();
        //蘇生アビであった場合、蘇生ウインドウを開く
        if (turnUnit.useSkill().meta.resurrection) {
            //戦闘不能者リストを開く
            $gameSystem._phaseState = 14;//対象選択
            this.openDeadUnitListWindow();
        } else {
            $gameSystem._phaseState = 5;//対象選択
            $gameMap.showRangeArea(turnUnit, null);
        }
    };

    // 2,SRPGコマンド【第二アビリティ】
    Scene_Map.prototype.secondAbility = function () {
        var turnUnit = $gameSystem.turnUnit();
        turnUnit.setUseSkill(turnUnit._myAbility[1]);
        //コマンドウインドウを閉じる
        this.closeCommandWindow();
        //蘇生アビであった場合、蘇生ウインドウを開く
        if (turnUnit.useSkill().meta.resurrection) {
            //戦闘不能者リストを開く
            $gameSystem._phaseState = 14;//対象選択
            this.openDeadUnitListWindow();
        } else {
            $gameSystem._phaseState = 5;//対象選択
            $gameMap.showRangeArea(turnUnit, null);
        }
    };

    // 2,SRPGコマンド【第三アビリティ】
    Scene_Map.prototype.thirdAbility = function () {
        var turnUnit = $gameSystem.turnUnit();
        var useSkill = turnUnit.checkSpecialSkill();
        if (useSkill) turnUnit.setUseSkill($dataSkills[useSkill]);

        //var weapon = turnUnit.isActor().weapons()[0];
        //コマンドウインドウを閉じる
        this.closeCommandWindow();
        //蘇生アビであった場合、蘇生ウインドウを開く
        if (turnUnit.useSkill().meta.resurrection) {
            //戦闘不能者リストを開く
            $gameSystem._phaseState = 14;//対象選択
            this.openDeadUnitListWindow();
        } else {
            $gameSystem._phaseState = 5;//対象選択
            $gameMap.showRangeArea(turnUnit, null);
        }
    };

    // 2,SRPGコマンド【バーストアビリティ】
    Scene_Map.prototype.burstAbility = function () {
        var turnUnit = $gameSystem.turnUnit();
        turnUnit.setUseSkill(turnUnit._myAbility[2]);
        //コマンドウインドウを閉じる
        this.closeCommandWindow();
        //蘇生アビであった場合、蘇生ウインドウを開く
        if (turnUnit.useSkill().meta.resurrection) {
            //戦闘不能者リストを開く
            $gameSystem._phaseState = 14;//対象選択
            this.openDeadUnitListWindow();
        } else {
            $gameSystem._phaseState = 5;//対象選択
            $gameMap.showRangeArea(turnUnit, null);
        }
    };

    // 2,SRPGコマンド【待機】
    Scene_Map.prototype.commandWait = function () {
        var turnUnit = $gameSystem.turnUnit();
        var actor = turnUnit.isActor();
        //待機した場合MPが回復する
        actor.gainMp(Math.round(actor.mmp * 10 / 100));
        //actor.gainMp(10);
        turnUnit.reserveDamagePopup(0);

        //コマンドウインドウを閉じる
        this.closeCommandWindow();
        //オンライン
        if ($gameSwitches.value(15)) {
            if (!$gameSystem.isSyncTurn()) {
                $gameSystem.sendInfo(); //オンライン時の処理
                $gameSwitches.setValue(25, true);
            }
        }
        //待機エリア表示しようか検討中(事後処理にいれる？)
        $gameSystem._phaseState = 11;//ターン終了後処理
    };

    // 2,SRPGコマンド【ユニットリスト】
    Scene_Map.prototype.commandUnitList = function () {
        ///コマンドウインドウを閉じる
        this.closeCommandWindow();
        ///ユニットリストウインドウを開く
        this.openUnitListWindow();
        $gameSystem._phaseState = 13;//ユニットリスト選択フェーズへ移行
    };

    // 2,SRPGコマンド【ステート確認】
    Scene_Map.prototype.commandCheckState = function () {
        this._battleStateWindow._index = 0;
        this._battleStateWindow.activate();
        this._commandWindow.deactivate();
        $gameSystem._phaseState = 15;//ユニットリスト選択フェーズへ移行
    };

    // 2,SRPGコマンド【ヘルプ】
    Scene_Map.prototype.commandHelpShow = function () {
        if ($gameSystem.helpShow) {
            $gameSystem.helpShow = false;
        } else {
            $gameSystem.helpShow = true;
        }
    };
    // 3,移動先選択
    Scene_Map.prototype.updateMoveInput = function () {
        var turnUnit = $gameSystem.turnUnit();

        //タッチした瞬間の処理
        if (TouchInput.isTriggered() || Input.isPressed('ok')) {
            //選択ポイントがエリア内かという処理もいれたい
            var x = $gameMap.canvasToMapX(TouchInput.x);
            var y = $gameMap.canvasToMapY(TouchInput.y);
            //座標のズレバグ対策入れられるか？
            //自身のユニットを選択するとコマンド選択画面に移行
            if (x == turnUnit.x && y == turnUnit.y) {
                SoundManager.playCancel();//キャンセル
                $gameMap.initColorArea();
                this.openCommandWindow();
                $gameMap.showInvisibleArea(turnUnit);
                $gameSystem._phaseState = 2;//コマンド選択画面へ移行
                //座標に対象が存在するか
            } else if ($gameMap.isInsideArea(x, y)) {
                SoundManager.playOk(); // 決定効果音を鳴らす
                //タッチした地点へカメラを移動
                $gamePlayer.setCameraXy(x, y);
                turnUnit.setToXy(x, y);

                $gameTemp.setDestination(x, y);//移動目標地点を記憶(_toX_toYと役目が被る、どちらかに統一すべし)

                //turnUnit.endMove();
                $gameTemp._cameraWait = true;
                if ($gameSwitches.value(15)) {
                    $gameSystem.sendInfo(); //オンライン時の処理(送信は間開けた方がいい？)
                    $gameSwitches.setValue(23, true);//移動選択フラグ
                }

                $gameSystem._phaseState = 4;//移動中
            } else {
                SoundManager.playBuzzer();//ブザー
            }
        }
        //キャンセルボタン
        if (TouchInput.isCancelled()) {
            SoundManager.playCancel();//キャンセル
            $gameMap.initColorArea();
            this.openCommandWindow();
            $gameMap.showInvisibleArea(turnUnit);
            $gameSystem._phaseState = 2;//コマンド選択画面へ移行
        }
    };

    // 4,移動処理
    Scene_Map.prototype.updateMove = function () {
        var turnUnit = $gameSystem.turnUnit();
        var d = turnUnit.findDirectionTo(turnUnit.toX(), turnUnit.toY());
        turnUnit.moveStraight(d);
    }

    // 5,対象選択
    Scene_Map.prototype.updateTargetInput = function () {
        var turnUnit = $gameSystem.turnUnit();
        //タッチした瞬間の処理
        if (TouchInput.isTriggered() || Input.isPressed('ok')) {
            var x = $gameMap.canvasToMapX(TouchInput.x);
            var y = $gameMap.canvasToMapY(TouchInput.y);
            //対象の敵がいるか(ケアルなどの味方回復とかのケースはどうしようか)
            turnUnit.setTarget(null);
            if (turnUnit.useSkill().scope == 1 || turnUnit.useSkill().scope == 2) {
                //対象が敵の場合
                //turnUnit.setTarget($gameMap.unitEnemyXy(x, y));
                turnUnit.setTarget($gameMap.unitAttackTargetXy(x, y, turnUnit));
                //以下ターゲット選択時、座標のズレバグ対策
                if (!turnUnit.target() && $gameMap.isInsideArea(x - 1, y)) {
                    turnUnit.setTarget($gameMap.unitAttackTargetXy(x - 1, y, turnUnit));
                }
                if (!turnUnit.target() && $gameMap.isInsideArea(x + 1, y)) {
                    turnUnit.setTarget($gameMap.unitAttackTargetXy(x + 1, y, turnUnit));
                }
                if (!turnUnit.target() && $gameMap.isInsideArea(x, y - 1)) {
                    turnUnit.setTarget($gameMap.unitAttackTargetXy(x, y - 1, turnUnit));
                }
                if (!turnUnit.target() && $gameMap.isInsideArea(x, y + 1)) {
                    turnUnit.setTarget($gameMap.unitAttackTargetXy(x, y + 1, turnUnit));
                }
                //目的地点へ移動しながら攻撃の場合(空の地点が選べて敵を選べない)
                if (turnUnit.useSkill().meta.move) {
                    if (turnUnit.useSkill().meta.move == "targetPoint") {
                        if ($gameMap.unitEnemyXy(x, y) == null && $gameMap.unitAllyXy(x, y) == null) {
                            turnUnit.setTarget(turnUnit);//あえて自身をターゲットに設定する(自身へのダメージは入らない)
                            $gameSystem._moveTargetPointFlag = true;
                            $gameSystem._moveTargetPointX = x;
                            $gameSystem._moveTargetPointY = y;
                        } else {
                            turnUnit.setTarget(null);
                        }
                    }
                }


                //「警戒」付与者が対象ならnull
                if (turnUnit.target()) {
                    if (turnUnit.target().nonTargetBuffCheck() && !(turnUnit == turnUnit.target())) turnUnit.setTarget(null);
                }
            } else if (turnUnit.useSkill().scope == 7 || turnUnit.useSkill().scope == 8 || turnUnit.useSkill().scope == 11) {
                //対象が味方の場合
                //turnUnit.setTarget($gameMap.unitAllyXy(x, y));
                turnUnit.setTarget($gameMap.unitCoverTargetXy(x, y, turnUnit));
                //以下ターゲット選択時、座標のズレバグ対策
                if (!turnUnit.target() && $gameMap.isInsideArea(x - 1, y)) {
                    turnUnit.setTarget($gameMap.unitCoverTargetXy(x - 1, y, turnUnit));
                }
                if (!turnUnit.target() && $gameMap.isInsideArea(x + 1, y)) {
                    turnUnit.setTarget($gameMap.unitCoverTargetXy(x + 1, y, turnUnit));
                }
                if (!turnUnit.target() && $gameMap.isInsideArea(x, y - 1)) {
                    turnUnit.setTarget($gameMap.unitCoverTargetXy(x, y - 1, turnUnit));
                }
                if (!turnUnit.target() && $gameMap.isInsideArea(x, y + 1)) {
                    turnUnit.setTarget($gameMap.unitCoverTargetXy(x, y + 1, turnUnit));
                }
                //蘇生の場合
                if (turnUnit.useSkill().meta.resurrection) {
                    if ($gameMap.unitEnemyXy(x, y) == null && $gameMap.unitAllyXy(x, y) == null) {
                        turnUnit.setTarget($gameSystem.isResurrectionUnit());//あえて自身をターゲットに設定する(自身へのダメージは入らない)
                        $gameSystem._resurrectionFlag = true;
                        $gameSystem.isResurrectionUnit()._x = x;
                        $gameSystem.isResurrectionUnit()._y = y;
                    } else {
                        turnUnit.setTarget(null);
                    }
                }
            }

            if (turnUnit.target() && $gameMap.isInsideArea(x, y)) {
                $gameMap.showEffectArea(turnUnit);//効果範囲表示
                SoundManager.playOk(); // 決定効果音を鳴らす
                this.openYesNoWindow(); //YesNoウインドウを開く

                $gamePlayer.setCameraEvent(turnUnit.target()); //カメラを選択した対象へ回す

                $gameSystem._phaseState = 6;//範囲表示およびYesNo選択
            } else {
                SoundManager.playBuzzer();//ブザー
                if (x == turnUnit.x && y == turnUnit.y) {
                    this.openCommandWindow();
                    $gamePlayer.setCameraEvent(turnUnit);
                    $gameMap.showInvisibleArea(turnUnit);
                    $gameSystem._phaseState = 2;//コマンド選択に戻る
                }
            }
        }
        //キャンセルボタン
        if (TouchInput.isCancelled()) {
            SoundManager.playCancel();//キャンセル
            this.openCommandWindow();
            $gamePlayer.setCameraEvent(turnUnit);
            $gameMap.showInvisibleArea(turnUnit);
            $gameSystem._phaseState = 2;//コマンド選択に戻る
        }
    };

    // 6,YesNo選択【Yes】
    Scene_Map.prototype.commandYes = function () {
        var turnUnit = $gameSystem.turnUnit();
        //YesNoウインドウを閉じる
        this.closeYesNoWindow();
        $gameTemp._attackStartFlag = true;
        if ($gameSwitches.value(15)) {
            $gameSystem.sendInfo(); //オンライン時の処理
            $gameSwitches.setValue(24, true);
        }
        //コマンド実行
        $gameSystem._phaseState = 7;//詠唱アニメーションフェーズへ移行
    };

    // 6,YesNo選択【No】
    Scene_Map.prototype.commandNo = function () {
        var turnUnit = $gameSystem.turnUnit();
        //攻撃後移動の場合、リセットする
        $gameSystem._moveTargetPointFlag = false;
        $gameSystem._moveTargetPointX = 0;
        $gameSystem._moveTargetPointY = 0;
        $gameTemp_resurrectionFlag = false;
        //YesNoウインドウを閉じる
        this.closeYesNoWindow();
        this.openCommandWindow();
        turnUnit.setTarget(null);
        turnUnit.setUseSkill(null);
        this.closeBattleStatusWindow();
        $gamePlayer.setCameraEvent(turnUnit);
        $gameMap.showInvisibleArea(turnUnit);
        $gameSystem._phaseState = 2;//コマンド選択に戻る
    };

    /*
    戦闘アニメーション-----------------------------------------------------------------------------
    GameMapで取り扱いたい
    */
    // 9,行動アニメーションの表示
    Scene_Map.prototype.showActionMotion = function (unit) {
        var target = unit.target();
        var battler = unit.isActor();
        battler.performAttack(); //武器アニメーション動作実行
        if (!$gameSystem._moveTargetPointFlag) {
            unit.turnTowardCharacter(target);// 向き
        }
        unit.setBattlerAttack();
        //unit.hasStepAnime();
        $gameSystem._phaseState = 10;//対象アニメーションフェーズへ移行
    };

    // 12,事後処理
    Scene_Map.prototype.endTurn = function () {
        var turnUnit = $gameSystem.turnUnit();
        var battler = turnUnit.isActor();
        this.closeBattleStatusWindow();
        $gameSystem.stateAction();
        battler._selfState = [];//このターンで付けたバフを初期化

        if ($gameSwitches.value(15)) {
            if ($gameSystem.isSyncTurn()) {
                $gameSystem._moveTargetPointFlag = false
                $gameSystem._moveTargetPointX = 0;
                $gameSystem._moveTargetPointY = 0;
                $gameSystem._resurrectionFlag = false
                $gameSystem.resetResurrectionUnit();
            }
        } else {
            //以下はスイッチ変数で管理した方が良いのでは？
            $gameSystem._moveTargetPointFlag = false
            $gameSystem._moveTargetPointX = 0;
            $gameSystem._moveTargetPointY = 0;
            $gameSystem._resurrectionFlag = false
            $gameSystem.resetResurrectionUnit();
        }

        $gameSystem.endTurn();
        $gameTemp._countWtTime = true;
        $gameSystem.setWtTurnList();//行動順調整
        $gameSystem._phaseState = 0; //カメラ移動完了後コマンド表示
        //$gameVariables.setValue(8, 0);
        //$gameVariables.setValue(9, 0);
    };


    // 13,ユニットリストウインドウ【決定】
    Scene_Map.prototype.okUnitList = function () {
        $gameTemp._selectUnit = this._unitListWindow.item();//ステータス画面に遷移するため、どのユニットを選択したか記憶したい
        this.closeUnitListWindow();
        this._battleStatusWindow.setUnit(null);
        //this.openCommandWindow();
        $gameSystem._phaseState = 2;//コマンド選択に戻る
        SceneManager.push(Scene_Status);//ステータス画面へ遷移する
    };

    // 13,ユニットリストウインドウ【キャンセル】
    Scene_Map.prototype.cancelUnitList = function () {
        this.closeUnitListWindow();
        this._battleStatusWindow.setUnit(null);
        this.openCommandWindow();
        $gamePlayer.setCameraEvent($gameSystem.turnUnit());
        $gameMap.showInvisibleArea($gameSystem.turnUnit());
        $gameSystem._phaseState = 2;//コマンド選択に戻る

    };

    // 14,戦闘不能者リストウインドウ【決定】
    Scene_Map.prototype.okDeadUnitList = function () {
        var turnUnit = $gameSystem.turnUnit();
        var resurrectionUnit = this._deadUnitListWindow.item();
        if (resurrectionUnit) {
            $gameSystem.setResurrectionUnit(resurrectionUnit);//ステータス画面に遷移するため、どのユニットを選択したか記憶したい
            this.closeDeadUnitListWindow();
            this._battleStatusWindow.setUnit(null);
            $gameSystem._phaseState = 5;//対象選択画面へ移行する
            $gameMap.showRangeArea(turnUnit, null);
        } else {
            SoundManager.playBuzzer();//ブザー
            this.cancelDeadUnitList();
        }
    };

    // 14,戦闘不能者リストウインドウ【キャンセル】
    Scene_Map.prototype.cancelDeadUnitList = function () {
        var turnUnit = $gameSystem.turnUnit();
        this.closeDeadUnitListWindow();
        this._battleStatusWindow.setUnit(null);
        this.openCommandWindow();
        $gamePlayer.setCameraEvent($gameSystem.turnUnit());
        $gameMap.showInvisibleArea($gameSystem.turnUnit());
        $gameSystem._phaseState = 2;//コマンド選択に戻る
    };

    // 15,ステート確認ウインドウ【キャンセル】
    Scene_Map.prototype.cancelCheckState = function () {
        this._battleStateWindow._index = -1;
        this._battleStateWindow.deactivate();
        this._commandWindow.activate();
        $gameSystem._phaseState = 2;//コマンド選択に戻る

    };

    // 移動選択ウェイト中か
    Scene_Map.prototype.isMoveWaitingMode = function () {
        if (Graphics.frameCount % moveWaitingTime === 0) {
            return true;
        } else {
            return false;
        }
    };

    // 対象選択ウェイト中か
    Scene_Map.prototype.isSelectWaitingMode = function () {
        if (Graphics.frameCount % selectWaitingTime === 0) {
            return true;
        } else {
            return false;
        }
    };

    // YesNo選択ウェイト中か
    Scene_Map.prototype.isYesNoWaitingMode = function () {
        if (Graphics.frameCount % yesNoWaitingTime === 0) {
            return true;
        } else {
            return false;
        }
    };

    // 戦闘終了ウェイト中か
    Scene_Map.prototype.isEndBattleWaitingMode = function () {
        if (Graphics.frameCount % endBattleTime === 0) {
            return true;
        } else {
            return false;
        }
    };

    // 多段ヒット表示ウェイト中か
    Scene_Map.prototype.isMultiHitPopWaitingMode = function () {
        if (Graphics.frameCount % multiHitPopTime === 0) {
            return true;
        } else {
            return false;
        }
    };

    // 戦闘開始準備
    Scene_Map.prototype.setStartBattle = function () {
        //$gameMap.battleActivate();戦闘モードにはまだしない
        $gameMap.setStartBattle();
        $gamePlayer.setTransparent(true); //透明化
        $gamePlayer.setThrough(true); //すり抜け
        $gamePlayer.hideFollowers(); //隊列歩行をOFFにする
        $gamePlayer.setPriorityType(0);
        //$gamePlayer.refresh(); //カーソル化
        $gameTemp._startBattleFlag = false;
        $gameSwitches.setValue(19, false);
        $gameSwitches.setValue(20, false);
        $gameSwitches.setValue(21, false);
        $gameSwitches.setValue(22, false);
        $gameSwitches.setValue(23, false);
        $gameSwitches.setValue(24, false);
        $gameSwitches.setValue(25, false);
        $gameSwitches.setValue(26, false);
        $gameSwitches.setValue(27, false);
        $gameSwitches.setValue(28, false);
        $gameSwitches.setValue(31, false);
        $gameSwitches.setValue(32, false);
        $gameSwitches.setValue(33, false);
        $gameSwitches.setValue(34, false);
        $gameSwitches.setValue(35, false);
        $gameSwitches.setValue(36, false);
        $gameSwitches.setValue(37, false);
        $gameSwitches.setValue(38, false);
        $gameSwitches.setValue(39, false);
        $gameSwitches.setValue(40, false);
        $gameSwitches.setValue(41, false);
        $gameSwitches.setValue(42, false);
        $gameSwitches.setValue(43, false);
        $gameSwitches.setValue(44, false);
        $gameSwitches.setValue(45, false);
        $gameSwitches.setValue(46, false);
        $gameSwitches.setValue(47, false);
        $gameSwitches.setValue(48, false);
        $gameSwitches.setValue(49, false);
        $gameSwitches.setValue(50, false);
        $gameSwitches.setValue(51, false);
        $gameSwitches.setValue(52, false);
        $gameSwitches.setValue(53, false);
        $gameSwitches.setValue(54, false);
        $gameSwitches.setValue(55, false);
        $gameSwitches.setValue(56, false);
        $gameSwitches.setValue(57, false);
        $gameSwitches.setValue(58, false);
        $gameSwitches.setValue(59, false);
        $gameSwitches.setValue(60, false);
        //メニューを禁止
        $gameSystem.disableMenu();
        //テスト用(ここで入れるべきではない)
        this.startBattle();
    };

    // 戦闘開始処理
    Scene_Map.prototype.startBattle = function () {
        $gameSystem.battleActivate();
        this._spriteset.update(); //効果なし
        $gameSwitches.setValue(2, true);
    };

    // 戦闘終了後処理(戦闘不能時)
    Scene_Map.prototype.gameOver = function () {
        $gameSystem.battleDeactivate(); //フェードアウト後ユニットを全消去し移動可能な状態でバトルモードを解除してからフェードインする流れが良い
        this.endTurn();
        this._phaseState = 0;
        $gameSwitches.setValue(4, true); //コモンイベントと連携(スイッチNoはいずれプラグインの変数設定から行えるようにする)
        $gameTemp._commandTime = false;
        $gamePlayer.refresh();

    };

    // 戦闘終了後処理
    Scene_Map.prototype.endBattle = function () {
        $gameSystem.battleDeactivate(); //フェードアウト後ユニットを全消去し移動可能な状態でバトルモードを解除してからフェードインする流れが良い
        this.endTurn();
        this._phaseState = 0;
        $gameSwitches.setValue(3, true); //コモンイベントと連携(スイッチNoはいずれプラグインの変数設定から行えるようにする)
        $gamePlayer.setPriorityType(1);
        $gameTemp._commandTime = false;
        $gamePlayer.refresh();
        $gameSystem.resetMembers()
    };

    // 戦闘不能ユニットの処理
    Scene_Map.prototype.updateDeadUnit = function () {
        var eventId = $gameTemp.deadUnitId();
        if (eventId > 0) {
            var event = $gameMap.event(eventId);
            event.setDeadBattler();
            if ($gameSwitches.value(15)) {
                if ($gameSwitches.value(27)) {
                    $gameSystem.syncVariable();
                    //$gameSystem.syncWtList();
                    $gameSwitches.setValue(27, false);
                } else {
                    $gameSystem.setUnitList($gameMap.events());
                    $gameSystem.sendInfo(); //戦闘不能時はサーバーに送信
                    $gameSwitches.setValue(27, true);
                }
            } else {
                $gameSystem.setUnitList($gameMap.events());
            }
        }
    };

    // 画面スクロール処理(使えない？)
    Scene_Map.prototype.updateScroll = function () {
        //ドラッグしてるカメラが移動(画面外でスクロールの方がいいか)
        if (TouchInput.TouchInput.isMoved()) {
            var x = $gameMap.canvasToMapX(TouchInput.x);
            var y = $gameMap.canvasToMapY(TouchInput.y);
            //タッチした地点へカメラを移動
            $gamePlayer.setCameraXy(x, y);
        }
    };

    //-----------------------------------------------------------------------------
    // Scene_Title
    // 項目を変えるため
    //
    Scene_Title.prototype.createCommandWindow = function () {
        this._commandWindow = new Window_TitleCommand();
        this._commandWindow.setHandler('training', this.commandTrainingMode.bind(this));
        this._commandWindow.setHandler('online', this.commandOnlineMode.bind(this));
        this.addWindow(this._commandWindow);
    };
    //トレーニングモード(スタートから流用)
    Scene_Title.prototype.commandTrainingMode = function () {
        DataManager.setupNewGame();
        this._commandWindow.close();
        this.fadeOutAll();
        $gamePlayer.setTransparent(true); //透明化
        $gamePlayer.setThrough(true); //すり抜け
        $gameSwitches.setValue(11, true); //キャラクター選択スイッチON(スイッチNoはいずれプラグインの変数設定から行えるようにする)
        $gameVariables.setValue(2, 0); //モード変数(変数Noはいずれプラグインの変数設定から行えるようにする)
        SceneManager.goto(Scene_Map);
    };
    //オンラインモード(スタートから流用)
    Scene_Title.prototype.commandOnlineMode = function () {
        DataManager.setupNewGame();
        this._commandWindow.close();
        this.fadeOutAll();
        $gamePlayer.setTransparent(true); //透明化
        $gamePlayer.setThrough(true); //すり抜け
        $gameSwitches.setValue(11, true); //キャラクター選択スイッチON(スイッチNoはいずれプラグインの変数設定から行えるようにする)
        $gameVariables.setValue(2, 0); //モード変数(変数Noはいずれプラグインの変数設定から行えるようにする)
        $gameSwitches.setValue(15, true); //オンラインフラグセット  これをONにするとエラーが起こる
        SceneManager.goto(Scene_Map);
    };

})();