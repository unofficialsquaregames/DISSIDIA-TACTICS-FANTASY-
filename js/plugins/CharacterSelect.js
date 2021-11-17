/*
 * ===========================================================================
 * CharacterSelect.js
 * (KanjiPartyChange.jsより流用)
 * ---------------------------------------------------------------------------
 * version 1.04
 * Copyright (c) 2020 Kanji the Grass
 * This work is provided under the MTCM Blue License
 * - https://ja.materialcommons.org/mtcm-b-summary/
 * Credits display: Kanji the Grass ordered by Munokura fungamemake.com
 * ===========================================================================
*/

/*:
 * @plugindesc 待機メンバーと入れ替えるシーンを追加します
 * @author 莞爾の草
 *
 * @param system
 * @text システム部
 *
 * @param addThisIntoMenuCommand
 * @parent system
 * @text メニュー表示
 * @desc メニュー画面に待機メンバーとの入れ替えコマンドを表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @default true
 *
 * @param maxBattleMembers
 * @parent system
 * @text 戦闘メンバーの最大数
 * @desc 戦闘メンバーの最大数です。ここで指定しない場合は0
 * @type number
 * @default 0
 *
 * @param maxAllParty
 * @parent system
 * @text パーティ最大人数
 * @desc パーティの最大人数です。
 * 戦闘参加人数+戦闘控えメンバーの最大数を指定してください。
 * @type number
 * @min 1
 * @default 4
 *
 * @param layoutCW
 * @text コマンドウィンドウ
 *
 * @param alignmentOfCommand
 * @parent layoutCW
 * @text テキストの行揃え
 * @desc コマンドウィンドウの行揃え
 * @type select
 * @default left
 * @option 左
 * @value left
 * @option 中
 * @value center
 * @option 右
 * @value right
 *
 * @param allyTerm
 * @parent layoutCW
 * @type string
 * @text 「味方の編成」表示テキスト
 * @desc 「味方の編成」表示テキストを指定。空にするとコマンドが消えます。
 * @default 味方の編成
 *
 * @param enemyTerm
 * @parent layoutCW
 * @type string
 * @text 「敵の編成」表示テキスト
 * @desc 「敵の編成」表示テキストを指定。空にするとコマンドが消えます。
 * @default 敵の編成
 *
 * @param saveTerm
 * @parent layoutCW
 * @type string
 * @text 「セーブ」表示テキスト
 * @desc 「セーブ」表示テキストを指定。空にするとコマンドが消えます。
 * @default セーブ
 *
 * @param loadTerm
 * @parent layoutCW
 * @type string
 * @text 「ロード」表示テキスト
 * @desc 「ロード」表示テキストを指定。空にするとコマンドが消えます。
 * @default ロード
 *
 * @param finishTerm
 * @parent layoutCW
 * @type string
 * @text 「完了」表示テキスト
 * @desc 「完了」表示テキストを指定。空にするとコマンドが消えます。
 * @default 完了
 *
 * @param layoutPW
 * @text パーティ選択ウィンドウ
 *
 * @param actorListColMax
 * @parent layoutPW
 * @text ウィンドウ列数
 * @desc 表示される列数です。この人数を超えるメンバー枠は下にスクロールします。 3から6推奨。
 * @type number
 * @default 4
 *
 * @param emptyFrameTerm
 * @parent layoutPW
 * @text 空欄表示テキスト
 * @desc 空欄に表示するテキスト
 * @type string
 * @default - 空き -
 *
 * @param enemyVariables1
 * @parent layoutPW
 * @text 1人目戦闘メンバーの変数ID
 * @desc 1人目戦闘メンバーの変数ID
 * @type number
 * @default 7
 *
 * @param enemyVariables2
 * @parent layoutPW
 * @text 2人目戦闘メンバーの変数ID
 * @desc 2人目戦闘メンバーの変数ID
 * @type number
 * @default 8
 *
 * @param enemyVariables3
 * @parent layoutPW
 * @text 3人目戦闘メンバーの変数ID
 * @desc 3人目戦闘メンバーの変数ID
 * @type number
 * @default 9
 *
 * @param enemyVariables4
 * @parent layoutPW
 * @text 4人目戦闘メンバーの変数ID
 * @desc 4人目戦闘メンバーの変数ID
 * @type number
 * @default 10
 *
 * @param layoutWW
 * @text 待機メンバーウィンドウ
 *
 * @param wwRowHeight
 * @parent layoutWW
 * @text 項目の高さ
 * @desc 選択項目の行の高さを指定します。
 * @type number
 * @default 64
 *
 * @param removeOnReserveTerm
 * @parent layoutWW
 * @text 「外す」表示テキスト
 * @desc 「外す」表示テキスト。空にするとコマンドが消えます。
 * @type string
 * @default 外す
 *
 * @param layoutSW
 * @text 能力値ウィンドウ
 *
 * @param nameShow
 * @parent layoutSW
 * @text 名前表示
 * @desc 名前を表示するか指定
 * @type boolean
 * @on 表示
 * @off 非表示
 * @default true
 *
 * @param horzLineYPos
 * @parent layoutSW
 * @text 水平線表示Y座標
 * @desc 表示する水平線の縦位置(Y)。複数指定可能
 * 書式 [Y1, Y2, ...]
 * @type string[]
 * @default [148]
 *
 * @help
 * このプラグインでは
 * - 既にパーティにいるメンバー : 『パーティメンバー』
 * - このプラグインから呼び出す場面 : 『パーティ編成画面』
 * - 『パーティ編成画面』からのみで呼び出せるメンバー : 『待機メンバー』
 * と呼称しています。
 *
 * ウィンドウの位置、高さの配列は計算式で記述できます。
 * Graphics.boxWidth(画面幅)はw、boxHeightはhと省略できます。
 *
 * ■プラグインコマンド
 *   kanjiPC start
 *     パーティ編成画面を開く。
 *
 *   kanjiPC add 3
 *     待機メンバーにID3番のアクターを加える。
 *     既にパーティや待機メンバーにいる場合は何もしません。
 *
 *   kanjiPC del 4 5-10
 *     待機メンバーからID4と5から10番のアクターを外します。
 *     パーティにいる場合、何もしません。
 *     パーティにいるアクターを待機メンバーから外すには、
 *     事前に「メンバーの入れ替え」等でパーティから外してください。
 *
 *   kanjiPC lock 1 3-4
 *     ID1、3から4番のアクターをパーティから外せないようにします。
 *
 *   kanjiPC unlock 1 3-4 5
 *     ID1、3から4、5番のアクターにかかったロックを解除します。
 *     ※1-100のように連番で指定する場合、
 *       左の数字は右の数字より必ず小さくしてください。
 *
 *   kanjiPC clear
 *     待機メンバー情報を初期化(空に)します。
 *
 *   kanjiPC changeMaxParty 9
 *     パーティメンバーの最大数を9に変更します。
 * 
 * ■利用規約
 * この作品は マテリアル・コモンズ・ブルー・ライセンスの下に提供されています。
 * - https://ja.materialcommons.org/mtcm-b-summary/
 * クレジット表示：莞爾の草 (仕様作成:ムノクラ fungamemake.com )
 *
 * ライセンス内容を確認の上、ご利用ください。
 */

(function () {
    "use strict";

    var param = PluginManager.parameters('CharacterSelect');

    param.alignmentOfCommand     = String(param['alignmentOfCommand']  || "center"),
    param.removeOnReserveTerm    = String(param['removeOnReserveTerm']),
    param.actorListColMax        = Number(param['actorListColMax']  || 4),
    param.maxBattleMembers       = Number(param['maxBattleMembers'] || 0),
    param.enemyVariables1       = Number(param['enemyVariables1'] || 0),
    param.enemyVariables2       = Number(param['enemyVariables2'] || 0),
    param.enemyVariables3       = Number(param['enemyVariables3'] || 0),
    param.enemyVariables4       = Number(param['enemyVariables4'] || 0),
    param.addThisIntoMenuCommand = eval(param['addThisIntoMenuCommand'] || false),
    param.allyTerm  = String(param['allyTerm']),
    param.enemyTerm  = String(param['enemyTerm']),
    param.finishTerm  = String(param['finishTerm']),
    param.emptyFrame  = String(param['emptyFrameTerm'] || "- EMPTY -"),
    param.nameShow    = eval(param['nameShow']),
    param.horzLineYPos= param['horzLineYPos']           || "[148]",
    param.wwRowHeight = Number(param['wwRowHeight']     || 48),
    param.maxAllParty = Number(param['maxAllParty']     || 8);

    var $originalParty, $originalMembers, ssBitmap;

    const __maxBattleMembers_Game_Party = Game_Party.prototype.maxBattleMembers;
    Game_Party.prototype.maxBattleMembers = function() {
        return param.maxBattleMembers ? param.maxBattleMembers :
        __maxBattleMembers_Game_Party.call(this);
    };


    function getIdList (data) {
        var list = data.match(/(\d+)(?:-(\d+))?/);
        if (list[2]) {
            var min = Number(list[1]), max = Number(list[2]);
            list = new Array(max - min + 1);
            for (var i = 0; i < list.length; i++) list[i] = i + min;
        }else{
            list = [Number(list[1])];
        }
        return list;
    }


    const __pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        __pluginCommand.call(this, command, args);
        if (command === 'characterSelect') {
            switch (args[0]) {
                case 'start':
                    ssBitmap = Bitmap.snap(SceneManager._scene);
                    SceneManager.push(Scene_LoadCharacterSelect);
                    break;
                case 'add':
                    var data, array = $gameSystem.selectMembers();
                    for (var i = 1; args[i]; i++) {
                        var m = getIdList(args[i])
                        for (var j = 0; data = m[j]; j++) {
                            if (!array.includes(data)) {
                                array.push(data);
                            }
                        }
                    }
                    break;
                case 'del':
                    for (var i = 1; args[i]; i++) {
                        var data, m = getIdList(args[i])
                        for (var j = 0; data = m[j]; j++) {
                            $gameSystem._selectMembers =
                            $gameSystem._selectMembers.filter(id => { return id !== data });
                        }
                    }
                    break;
                case 'clear':
                    $gameSystem.selectMembers().length = 0;
                    break;
                case 'changeMaxParty':
                    $gameSystem._kanjiPCMaxParty = Number(args[1]);
                    break;
                };
        }
    };

    Game_System.prototype.selectMembers = function () {
        if (!this._selectMembers) this._selectMembers = []
        return this._selectMembers;
    }


    const __Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow
    Scene_Menu.prototype.createCommandWindow = function () {
        __Scene_Menu_createCommandWindow.call(this);
        this._commandWindow.setHandler('partyChange', this.commandKNSPartyChange.bind(this));
    }

    Scene_Menu.prototype.commandKNSPartyChange = function () {
        Bitmap.snap(SceneManager._scene);
        SceneManager.push(Scene_LoadCharacterSelect);
    }

    // Window_CharacterSelectMainCommand
    function Window_CharacterSelectMainCommand (){
        return this.initialize.apply(this, arguments);
    }

    Window_CharacterSelectMainCommand.prototype = Object.create(Window_Command.prototype);
    Window_CharacterSelectMainCommand.prototype.constructor = Window_CharacterSelectMainCommand;

    Window_CharacterSelectMainCommand.prototype.initialize = function () {
        var w = Graphics.boxWidth, h = Graphics.boxHeight,
        a = eval("[0, 0, 250, 256]");
        this.__windowWidth = a[2], this.__windowHeight = a[3];
        Window_Command.prototype.initialize.call(this, a[0], a[1]);
    }

    Window_CharacterSelectMainCommand.prototype.windowWidth = function () {
        return this.__windowWidth;
    }

    Window_CharacterSelectMainCommand.prototype.windowHeight = function () {
        return this.__windowHeight;
    }

    Window_CharacterSelectMainCommand.prototype.makeCommandList = function (x, y) {
        if (param.allyTerm) this.addCommand(param.allyTerm, "ally");
        if (param.enemyTerm) this.addCommand(param.enemyTerm, "enemy");
        if (param.saveTerm) this.addCommand(param.saveTerm, "save");
        if (param.loadTerm) this.addCommand(param.loadTerm, "load");
        if (param.finishTerm) this.addCommand(param.finishTerm, "cancel");
    }

    Window_CharacterSelectMainCommand.prototype.itemTextAlign = function() {
        return param.alignmentOfCommand;
    };



    // Window_AllyBattlerList
    function Window_AllyBattlerList (){
        return this.initialize.apply(this, arguments);
    }

    Window_AllyBattlerList.prototype = Object.create(Window_Selectable.prototype);
    Window_AllyBattlerList.prototype.constructor = Window_AllyBattlerList;

    Window_AllyBattlerList.prototype.initialize = function () {
        var w = Graphics.boxWidth, h = Graphics.boxHeight,
        a = eval("[250, 0, w - 250, 128]");
        Window_Selectable.prototype.initialize.call(this, a[0], a[1], a[2], a[3]);
        this.refresh();
    }

    Window_AllyBattlerList.prototype.maxCols = function() {
        return param.actorListColMax;
    };

    Window_AllyBattlerList.prototype.itemHeight = function() {
        return this.contentsHeight();
    };

    Window_AllyBattlerList.prototype.maxItems = function() {
        return $gameSystem._kanjiPCMaxParty || param.maxAllParty;
    };

    Window_AllyBattlerList.prototype.standardFontSize = function() {
        return 22;
    };

    Window_AllyBattlerList.prototype.drawItem = function (index) {
        var actor = $gameActors.actor($gameParty._actors[index]), rect = this.itemRect(index);
        if (actor) {
            this.drawActorCharacter(actor, rect.x + rect.width / 2,
            rect.y + rect.height - 30);
            this.drawText(actor.name(), rect.x,
            rect.y + rect.height - this.standardFontSize() - 14, rect.width, "center");
        } else {
            this.contents.paintOpacity = 128;
            this.drawText(param.emptyFrame, rect.x, rect.y + (this.itemHeight() - this.standardFontSize()) / 2,
            rect.width, "center")
            this.contents.paintOpacity = 255;
        }
    }
    
    // Window_EnemyBattlerList
    function Window_EnemyBattlerList (){
        return this.initialize.apply(this, arguments);
    }

    Window_EnemyBattlerList.prototype = Object.create(Window_Selectable.prototype);
    Window_EnemyBattlerList.prototype.constructor = Window_EnemyBattlerList;

    Window_EnemyBattlerList.prototype.initialize = function () {
        var w = Graphics.boxWidth, h = Graphics.boxHeight,
        a = eval("[250, 128, w - 250, 128]");
        Window_Selectable.prototype.initialize.call(this, a[0], a[1], a[2], a[3]);
        this.refresh();
    }

    Window_EnemyBattlerList.prototype.maxCols = function() {
        return param.actorListColMax;
    };

    Window_EnemyBattlerList.prototype.itemHeight = function() {
        return this.contentsHeight();
    };

    Window_EnemyBattlerList.prototype.maxItems = function() {
        return $gameSystem._kanjiPCMaxParty || param.maxAllParty;
    };

    Window_EnemyBattlerList.prototype.standardFontSize = function() {
        return 22;
    };

    Window_EnemyBattlerList.prototype.drawItem = function (index) {
        var id;
        switch (index) {
        case 0:
          id = $gameVariables.value(param.enemyVariables1);
          break;
        case 1:
          id = $gameVariables.value(param.enemyVariables2);
          break;
        case 2:
          id = $gameVariables.value(param.enemyVariables3);
          break;
        case 3:
          id = $gameVariables.value(param.enemyVariables4);
          break;
        }
        var actor = $gameActors.actor(id), rect = this.itemRect(index);
        if (actor) {
            this.drawActorCharacter(actor, rect.x + rect.width / 2,
            rect.y + rect.height - 30);
            this.drawText(actor.name(), rect.x,
            rect.y + rect.height - this.standardFontSize() - 14, rect.width, "center");
        } else {
            this.contents.paintOpacity = 128;
            this.drawText(param.emptyFrame, rect.x, rect.y + (this.itemHeight() - this.standardFontSize()) / 2,
            rect.width, "center")
            this.contents.paintOpacity = 255;
        }
    }

    // Window_ReserveMember
    function Window_ReserveMember () {
        this.initialize.apply(this, arguments);
    }

    Window_ReserveMember.prototype = Object.create(Window_Selectable.prototype);
    Window_ReserveMember.prototype.constructor = Window_ReserveMember;

    Window_ReserveMember.prototype.initialize = function () {
        var w = Graphics.boxWidth, h = Graphics.boxHeight,
        a = eval("[0, 256, 250, h - 256]");
        Window_Selectable.prototype.initialize.call(this, a[0], a[1], a[2], a[3]);
        this.refresh();
    }

    Window_ReserveMember.prototype.maxItems = function() {
        return $gameSystem.selectMembers().length + (param.removeOnReserveTerm ? 1 : 0);
    };

    Window_ReserveMember.prototype.drawItem = function (index) {
        var rect = this.itemRect(index);
        if (!param.removeOnReserveTerm || index > 0) {
            var id = $gameSystem.selectMembers()[index-(param.removeOnReserveTerm ? 1 : 0)];
            var actor = $gameActors.actor(id);
            /*
            var paintOpacity;
            if ($gameParty._actors.includes(id)) {
              paintOpacity = 128;
            }else{
              paintOpacity = 255;
            }
            */
            this.drawActorCharacter(actor, rect.x + 20, rect.y,rect.width, rect.height);
            this.drawText(actor.name(), rect.x+42, rect.y,rect.width);
        }else{
            this.drawText(param.removeOnReserveTerm, rect.x, rect.y,rect.width, "center");
        }
    }
    
    /*
    Window_ReserveMember.prototype.drawActorCharacter = function(actor, x, y, paintOpacity) {
      this.drawCharacter(actor.characterName(), actor.characterIndex(), x, y, paintOpacity);
    };
    */

    Window_ReserveMember.prototype.drawCharacter = function(characterName, characterIndex, x, y) {
        var bitmap = ImageManager.loadCharacter(characterName);
        var big = ImageManager.isBigCharacter(characterName);
        var pw = bitmap.width / (big ? 3 : 12);
        var ph = bitmap.height / (big ? 4 : 8);
        var n = characterIndex;
        var sx = (n % 4 * 3 + 1) * pw;
        var sy = (Math.floor(n / 4) * 4) * ph;
        this.contents.blt(bitmap, sx, sy, pw, this.itemHeight(), x - pw / 2, y);
    };

    Window_ReserveMember.prototype.lineHeight = function () {
        return param.wwRowHeight;
    }




    function refreshStatus(actor, window) {
        if (window) {
            window.contents.clear();
            if (actor) {
                var w = Graphics.boxWidth, h = Graphics.boxHeight, a, x, y, width;

                window.contents.fontSize = 26;
                a = eval("[0, 0]");
                window.drawActorCharacter(actor, a[0] + Window_Base._faceWidth / 2,
                a[1] + Window_Base._faceHeight - 8);
                
                if (param.nameShow) {
                    a = eval("[150, 0, 180]");
                    window.drawActorName(actor, a[0], a[1], a[2] || 180);
                }
                a = eval("[330, 36, 180]");
                if (a[2]) window.drawActorIcons(actor, a[0], a[1], a[2]);

                window.contents.paintOpacity = 48;
                a = eval(param.horzLineYPos);
                for (var i = 0; i < a.length; i++) {
                    window.contents.fillRect(0, a[i], window.contentsWidth(), 2,
                    window.normalColor());
                };
                window.contents.paintOpacity = 255;
            }
        }
    }

    Window_AllyBattlerList.prototype.updateHelp = function () {
        var actor = $gameActors.actor($gameParty._actors[this._index]);
        refreshStatus(actor, this._helpWindow);
    }

    Window_ReserveMember.prototype.updateHelp = function () {
        var actor = !param.removeOnReserveTerm || this._index ?
        $gameActors.actor($gameSystem.selectMembers()[this._index - 
            (param.removeOnReserveTerm ? 1 : 0)]) : null;
        refreshStatus(actor, this._helpWindow);
    }




    // Scene_CharacterSelect
    function Scene_CharacterSelect (){
        return this.initialize.apply(this, arguments);
    }

    Scene_CharacterSelect.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_CharacterSelect.prototype.constructor = Scene_CharacterSelect;

    Scene_CharacterSelect.prototype.create = function () {
        Scene_MenuBase.prototype.create.call(this);
        ssBitmap = null;
        this.createMainCommandsWindow();
        this.createAllyListWindow();
        this.createEnemyListWindow();
        this.createReserveMemberWindow();
        this.createStatusWindow();
    }

    Scene_CharacterSelect.prototype.createMainCommandsWindow = function () {
        this.commandWindow = new Window_CharacterSelectMainCommand();
        this.commandWindow.setHandler('ally', this.commandAllyChange.bind(this));
        this.commandWindow.setHandler('enemy', this.commandEnemyChange.bind(this));
        this.commandWindow.setHandler('save', this.commandSave.bind(this));
        this.commandWindow.setHandler('load', this.commandLoad.bind(this));
        this.commandWindow.setHandler('cancel', this.commandFinish.bind(this));
        this.commandWindow.activate();
        this.addWindow(this.commandWindow);
    }

    Scene_CharacterSelect.prototype.createAllyListWindow = function () {
        this.allyBattlerListWindow = new Window_AllyBattlerList(this.commandWindow.width, 0,
            Graphics.boxWidth - this.commandWindow.width, this.commandWindow.height);
        this.allyBattlerListWindow.setHandler('ok',     this.commandChangeBattler.bind(this));
        this.allyBattlerListWindow.setHandler('cancel', this.commandCancelActor.bind(this));
        this.addWindow(this.allyBattlerListWindow);
    }
    
    Scene_CharacterSelect.prototype.createEnemyListWindow = function () {
        this.enemyBattlerListWindow = new Window_EnemyBattlerList(this.commandWindow.width, 0,
            Graphics.boxWidth - this.commandWindow.width, this.commandWindow.height);
        this.enemyBattlerListWindow.setHandler('ok',     this.commandChangeBattler.bind(this));
        this.enemyBattlerListWindow.setHandler('cancel', this.commandCancelActor.bind(this));
        this.addWindow(this.enemyBattlerListWindow);
    }

    Scene_CharacterSelect.prototype.createReserveMemberWindow = function () {
        this.reserveMemberWindow = new Window_ReserveMember();
        this.reserveMemberWindow.setHandler('ok',     this.commandOkReserve.bind(this));
        this.reserveMemberWindow.setHandler('cancel', this.commandCancelReserve.bind(this));
        this.addWindow(this.reserveMemberWindow);
    }
    

    Scene_CharacterSelect.prototype.createStatusWindow = function () {
        var w = Graphics.boxWidth, h = Graphics.boxHeight,
        a = eval("[250, 256, w - 250, h - 256]");
        this.statusWindow = new Window_Base(a[0], a[1], a[2], a[3]);
        this.allyBattlerListWindow.setHelpWindow(this.statusWindow);
        //this.enemyBattlerListWindow.setHelpWindow(this.statusWindow);
        this.reserveMemberWindow.setHelpWindow(this.statusWindow);
        this.addWindow(this.statusWindow);
    }

    // Window_CharacterSelectMainCommand
    Scene_CharacterSelect.prototype.commandAllyChange = function () {
        this.allyBattlerListWindow.activate();
        this.allyBattlerListWindow.select(0);
    }

    Scene_CharacterSelect.prototype.commandEnemyChange = function () {
        this.enemyBattlerListWindow.activate();
        this.enemyBattlerListWindow.select(0);
    }
    // 2,SRPGコマンド【セーブ】
    Scene_CharacterSelect.prototype.commandSave = function() {
      $gameSwitches.setValue(11, true); //キャラクター選択スイッチON(スイッチNoはいずれプラグインの変数設定から行えるようにする)
      $gameSwitches.setValue(12, false); //エリア選択スイッチOFF(スイッチNoはいずれプラグインの変数設定から行えるようにする)
      SceneManager.push(Scene_Save);
    };
  
    // 2,SRPGコマンド【ロード】
    Scene_CharacterSelect.prototype.commandLoad = function() {
      SceneManager.push(Scene_Load);
    };

    Scene_CharacterSelect.prototype.commandFinish = function () {
        $gameSwitches.setValue(11, false); //キャラクター選択スイッチON(スイッチNoはいずれプラグインの変数設定から行えるようにする)
        $gameSwitches.setValue(12, true); //エリア選択スイッチOFF(スイッチNoはいずれプラグインの変数設定から行えるようにする)
        $originalParty = $originalMembers = null;
        $gamePlayer.refresh();
        this.popScene();
    }

    // Window_AllyBattlerList
    Scene_CharacterSelect.prototype.commandChangeBattler = function () {
        this.reserveMemberWindow.activate();
        this.reserveMemberWindow.select(0);
    }

    Scene_CharacterSelect.prototype.commandCancelActor = function () {
        this.commandWindow.activate();
        this.statusWindow.contents.clear();
        this.allyBattlerListWindow.select(-1);
        this.enemyBattlerListWindow.select(-1);
    }

    // Window_ReserveMember
    Scene_CharacterSelect.prototype.commandOkReserve = function () {
        var id = $gameParty._actors[this.allyBattlerListWindow._index],
        data = $gameSystem.selectMembers();
        var enemyList = [$gameVariables.value(param.enemyVariables1), $gameVariables.value(param.enemyVariables2), $gameVariables.value(param.enemyVariables3), $gameVariables.value(param.enemyVariables4)];
        if (param.removeOnReserveTerm && this.reserveMemberWindow._index == 0) {
          if(this.commandWindow._index == 0 && id){
            // 控えメンバーウィンドウからパーティを外した場合
            if ($gameParty._actors.length > 1) {
                $gameParty._actors = $gameParty._actors.filter(actorId => id !== actorId);
            }else{
                SoundManager.playBuzzer();
            }
          }else if(this.commandWindow._index == 1){
            switch(this.enemyBattlerListWindow._index){
            case 0:
              $gameVariables.setValue(param.enemyVariables1, 0);
              break;
            case 1:
              $gameVariables.setValue(param.enemyVariables2, 0);
              break;
            case 2:
              $gameVariables.setValue(param.enemyVariables3, 0);
              break;
            case 3:
              $gameVariables.setValue(param.enemyVariables4, 0);
              break;
            }
          }
        }else{
        // 控えメンバーウィンドウのアクターを選んだ場合
          var index = this.reserveMemberWindow._index - (param.removeOnReserveTerm ? 1 : 0);
          if(this.commandWindow._index == 0){
            if (!$gameParty._actors.includes(data[index])){
              if (id) {
                // パーティにアクターがいる。
                $gameParty._actors[this.allyBattlerListWindow._index] = data[index];
              }else{
                // パーティウィンドウで選んだところにアクターがいない
                $gameParty._actors.push(data[index]);
              }
            }else{
                SoundManager.playBuzzer();
            }
          }else if(this.commandWindow._index == 1){
            if (!enemyList.includes(data[index])){
              switch(this.enemyBattlerListWindow._index){
              case 0:
                $gameVariables.setValue(param.enemyVariables1, data[index]);
                break;
              case 1:
                $gameVariables.setValue(param.enemyVariables2, data[index]);
                break;
              case 2:
                $gameVariables.setValue(param.enemyVariables3, data[index]);
                break;
              case 3:
                $gameVariables.setValue(param.enemyVariables4, data[index]);
                break;
              }
            }else{
                SoundManager.playBuzzer();
            }
          }
        }
        if(this.commandWindow._index == 0){
          this.allyBattlerListWindow.refresh();
          this.allyBattlerListWindow.activate();
        }else if(this.commandWindow._index == 1){
          this.enemyBattlerListWindow.refresh();
          this.enemyBattlerListWindow.activate();
        }
        this.reserveMemberWindow.refresh();
        this.reserveMemberWindow.select(-1);
    }

    Scene_CharacterSelect.prototype.commandCancelReserve = function () {
        this.allyBattlerListWindow.activate();
        this.reserveMemberWindow.select(-1);
    }

    Scene_CharacterSelect.prototype.popScene = function () {
        SceneManager.pop();
        SceneManager.pop();
    }


    // 画像の読み込み待ちのためのロード画面
    function Scene_LoadCharacterSelect() {
        this.initialize.apply(this, arguments);
    }

    Scene_LoadCharacterSelect.prototype = Object.create(Scene_Base.prototype);
    Scene_LoadCharacterSelect.prototype.constructor = Scene_LoadCharacterSelect;

    Scene_LoadCharacterSelect.prototype.isReady = function() {
        return ImageManager.isReady();
    };

    Scene_LoadCharacterSelect.prototype.create = function() {
        Scene_Base.prototype.create.call(this);
        this._screenShot = new Sprite(ssBitmap || SceneManager.backgroundBitmap());
        this.addChild(this._screenShot);
        var array = $gameSystem.selectMembers();
        $gameSystem._selectMembers = array.filter(id => { return id !== null } );
        $originalParty = $gameParty._actors.slice(),
        $originalMembers = $gameSystem._selectMembers.slice();
        $gameSystem.selectMembers().concat($gameParty._actors).forEach(id => {
            var actor = $gameActors.actor(id);
            ImageManager.reserveFace(actor.faceName());
            ImageManager.reserveCharacter(actor.characterName());
            ImageManager.reserveSvActor(actor.battlerName());
        });
    };

    Scene_LoadCharacterSelect.prototype.start = function() {
        Scene_Base.prototype.start.call(this);
        SceneManager.push(Scene_CharacterSelect);
    };
})();