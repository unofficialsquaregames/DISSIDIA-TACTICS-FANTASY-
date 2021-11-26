// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"基本的なパラメーターを設定するプラグインです。","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"メイン画面へ進む前に、\"Made with MV\"のスプラッシュ画面もしくはカスタマイズされたスプラッシュ画面を表示します。","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"EventDebugger","status":true,"description":"イベントデバッグプラグイン","parameters":{"ステップ開始":"F7","ステップイン":"F11","ステップオーバー":"F10","続行":"F6","表示切替":"F12","変数監視":"F1","監視最大数":"3","イベントテスト":"true","機能キー抑制":"false","OK動作":"F11","キャンセル動作":"F6","Ctrl同時押し":"false","Alt同時押し":"false","スクリプトデバッグ":"1","CTRLで無効化":"true"}},
{"name":"MessageWindowPopup","status":true,"description":"フキダシウィンドウプラグイン","parameters":{"フォントサイズ":"22","余白":"10","自動設定":"true","フェイス倍率":"75","ウィンドウ連携":"true","行間":"4","ウィンドウ透過":"false","フォントサイズ増減幅":"12","フォントサイズ上限":"96","フォントサイズ下限":"24","画面内に収める":"false","振動の速さ":"5","振動時間":"60","テールを使わない":"false","最小横幅取得変数ID":"0","最小高さ取得変数ID":"0","lowerLimitX":"0","upperLimitX":"0","lowerLimitY":"0","upperLimitY":"0","tailImage":"","tailImageAdjustY":"0"}},
{"name":"ChangeTileSize","status":false,"description":"48x48以外のグリッドサイズのマップを使用可能にします。","parameters":{"Tile Size":"48","Tileset Image Folder":"img/tilesets/","Parallax Image Folder":"img/parallaxes/"}},
{"name":"SAN_TileToner","status":true,"description":"タイルトナー 1.1.2\r\nマップのタイルを染色します。","parameters":{"ShowBaseTone":"ON","FadingDuration":"15"}},
{"name":"KanjiPartyChange","status":false,"description":"待機メンバーと入れ替えるシーンを追加します","parameters":{"system":"","addThisIntoMenuCommand":"true","partyChangeCommand":"パーティ編成","maxBattleMembers":"0","maxAllParty":"4","lockIcon":"195","layoutCW":"","CWpos":"[0, 0, 270, 192]","alignmentOfCommand":"left","changeTerm":"交代","removeTerm":"外す","revertTerm":"元に戻す","finishTerm":"完了","layoutPW":"","PWpos":"[270, 0, w-270, 128]","pwFaceType":"walk","actorListColMax":"4","emptyFrameTerm":"- 空き -","layoutWW":"","WWpos":"[0, 192, 250, h - 192]","wwFaceType":"walk","wwRowHeight":"64","removeOnReserveTerm":"外す","layoutSW":"","SWpos":"[250, 256, w - 250, h - 256]","hpPos":"[150, 72, 200]","mpPos":"[150, 108, 200]","tpPos":"[360, 72, 144]","swFaceType":"walk","facePos":"[0, 0]","nameShow":"true","namePos":"[150, 0, 180]","classShow":"false","classPos":"[330, 0, 180]","levelShow":"false","levelPos":"[150, 36, 120]","iconsPos":"[330, 36, 180]","horzLineYPos":"[148]","equipShow":"false","equipPos":"[0, 158, 320]","equipRowHeight":"36","statusShow":"true","statusPos":"[340, 158, 180]","statusRowHeight":"36","paramListSW":"[\"2\",\"3\",\"4\",\"5\",\"X1\",\"S1\"]","xParamNames":"[\"命中率\",\"回避率\",\"会心率\",\"会心回避率\",\"魔法回避率\",\"魔法反射率\",\"反撃率\",\"HP再生率\",\"MP再生率\",\"TP再生率\"]","sParamNames":"[\"狙われ率\",\"防御効果率\",\"回復効果率\",\"薬の知識\",\"MP消費率\",\"TPチャージ率\",\"物理ダメージ率\",\"魔法ダメージ率\",\"床ダメージ率\",\"経験獲得率\"]","parcentStr":"％"}},
{"name":"UsableCarriageReturn","status":true,"description":"改行コード使用可能プラグイン","parameters":{}},
{"name":"DatabaseConverter","status":true,"description":"データベース変換プラグイン","parameters":{"excelDataPath":"excelData","ExportPrefix":"","targetDatabase":"[\"{\\\"JsonName\\\":\\\"Actors\\\",\\\"VariableName\\\":\\\"\\\"}\",\"{\\\"JsonName\\\":\\\"Classes\\\",\\\"VariableName\\\":\\\"\\\"}\",\"{\\\"JsonName\\\":\\\"Skills\\\",\\\"VariableName\\\":\\\"\\\"}\",\"{\\\"JsonName\\\":\\\"Items\\\",\\\"VariableName\\\":\\\"\\\"}\",\"{\\\"JsonName\\\":\\\"Weapons\\\",\\\"VariableName\\\":\\\"\\\"}\",\"{\\\"JsonName\\\":\\\"Armors\\\",\\\"VariableName\\\":\\\"\\\"}\",\"{\\\"JsonName\\\":\\\"Enemies\\\",\\\"VariableName\\\":\\\"\\\"}\",\"{\\\"JsonName\\\":\\\"Troops\\\",\\\"VariableName\\\":\\\"\\\"}\",\"{\\\"JsonName\\\":\\\"States\\\",\\\"VariableName\\\":\\\"\\\"}\",\"{\\\"JsonName\\\":\\\"MapInfos\\\",\\\"VariableName\\\":\\\"\\\"}\"]","fileFormat":"xlsx","originalDataLoad":"false","autoImport":"false","exportEventTest":"true","originalDatabaseStack":"false","commandPrefix":""}},
{"name":"OnlineAvatar","status":false,"description":"Firebaseを使ってプレイヤーをオンライン同期します。","parameters":{"apiKey":"AIzaSyBWuNpQ98b4rw7wdNUltjkC41QukMw2dUo","authDomain":"dissidia-tactics-fantasy.firebaseapp.com","databaseURL":"https://dissidia-tactics-fantasy-default-rtdb.firebaseio.com","avatarEvent":"1","syncSwitchStart":"11","syncSwitchEnd":"20","syncVariableStart":"11","syncVariableEnd":"20"}},
{"name":"PressAnyButton","status":true,"description":"PressAnyButtonプラグイン","parameters":{"startText":"Press Any Button","soundEffect":"","font":"","adjustY":"0","decisionOnly":"false"}},
{"name":"PictureCallCommon","status":true,"description":"ピクチャのボタン化プラグイン","parameters":{"透明色を考慮":"true","ピクチャ番号の変数番号":"6","ポインタX座標の変数番号":"0","ポインタY座標の変数番号":"0","タッチ操作抑制":"false","タッチ操作抑制スイッチ":"0","戦闘中常にコモン実行":"false","並列処理として実行":"false","無効スイッチ":"0"}},
{"name":"aligncenter","status":true,"description":"メッセージボックスの文字を中央揃い、右揃いにするプラグインです。","parameters":{}},
{"name":"TacticsBattleSys","status":true,"description":"DISSIDIA TACTICS FANTASY専用のゲームシステム","parameters":{"damagePopupInterval":"30","checkSkillId":"0","useUnitHpGauge":"1","useUnitStateIcon":"1","useUnitID":"1","colorAreaMove":"0 0 255 125","colorAreaWaiting":"255 255 255 125","colorAreaTargetAlly":"0 255 0 125","colorAreaTargetEnemy":"255 0 0 125","colorAreaTurnUnit":"255 255 32 128","colorAreaInvisible":"255 255 255 128","colorAreaInvisibleCover":"0 0 0 128","backAttackPhysical":"1.5","backAttackMagical":"1.5","reflectAnimationId":"0","commandX":"0","commandY":"0","commandLineHeight":"36","statusBackground":"1","statusNameWidth":"144","statusHpWidth":"186","statusFaceMirror":"left","unitListWidth":"240","unitListRows":"7","helpWindowLine":"4","infoSize":"480*480","statusArrowImage":"statusArrow","moveWaitingTime":"10","selectWaitingTime":"10","yesNoWaitingTime":"60","endBattleTime":"180","multiHitPopTime":"10","stateMax":"4","stateIconWidth":"16","wtTurnListMax":"10","isDyingHp":"10","CriticalColor":"255 0 0 255","MissColor":"0 0 0 0","WeakColor":"0 255 128 255","WeakLine":"200","ResistColor":"0 0 128 255","ResistLine":"50","paramFlashDuration":"60","FontSize":"16","MaxWidth":"240","UsingItalic":"false","UsingOutline":"false","CriticalDamage":"2","MaxElementDamage":"200","cursorImage":"!$Cursor"}},
{"name":"DataCacheBlocker","status":true,"description":"キャッシュを阻止します。（dataフォルダのみ）","parameters":{}},
{"name":"CharacterSelect","status":true,"description":"待機メンバーと入れ替えるシーンを追加します","parameters":{"system":"","addThisIntoMenuCommand":"true","maxBattleMembers":"0","maxAllParty":"4","layoutCW":"","alignmentOfCommand":"left","allyTerm":"味方の編成","enemyTerm":"敵の編成","saveTerm":"セーブ","loadTerm":"ロード","finishTerm":"完了","layoutPW":"","actorListColMax":"4","emptyFrameTerm":"- ランダム -","layoutWW":"","wwRowHeight":"32","wwRowTop":"16","removeOnReserveTerm":"外す","layoutSW":"","nameShow":"true","horzLineYPos":"[148]"}}
];
