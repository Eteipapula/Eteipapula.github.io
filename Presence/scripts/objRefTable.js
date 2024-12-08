const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.Timer,
		C3.Plugins.filechooser,
		C3.Behaviors.Anchor,
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.Keyboard,
		C3.Plugins.NinePatch,
		C3.Plugins.Mouse,
		C3.Plugins.TextBox,
		C3.Plugins.Audio,
		C3.Plugins.skymen_VanillaPlusColorPicker,
		C3.Plugins.GameRecorder,
		C3.Plugins.SpeechRecognition,
		C3.Plugins.TiledBg,
		C3.Plugins.Browser,
		C3.Plugins.Button,
		C3.Behaviors.Tween
	];
};
self.C3_JsPropNameTable = [
	{NB: 0},
	{Font: 0},
	{COLOR: 0},
	{ALIGN: 0},
	{Inversé: 0},
	{GlisserDéposer: 0},
	{Minuteur: 0},
	{Texte: 0},
	{Legende: 0},
	{Ancre: 0},
	{SELECTIONDIMAGE: 0},
	{RATIOLARGEUR: 0},
	{Luminositey: 0},
	{LerpInverser: 0},
	{Image: 0},
	{Toucher: 0},
	{Clavier: 0},
	{Selected: 0},
	{Souris: 0},
	{Hover: 0},
	{Attrappe: 0},
	{INDICATION: 0},
	{SaisieDeTexte: 0},
	{FONCTION: 0},
	{LEGENDE: 0},
	{BOUTON: 0},
	{Audio: 0},
	{ColorPicker: 0},
	{Sprite: 0},
	{ColorPicker2: 0},
	{CaptureDuJeu: 0},
	{ReconnaissanceVocale: 0},
	{ArrièreplanRépété: 0},
	{INDICATION2: 0},
	{ScreenshotSprite: 0},
	{Browser: 0},
	{DownloadButton: 0},
	{TakeScreenshotButton: 0},
	{ArrièreplanRépété2: 0},
	{Interpolation: 0},
	{FLASH: 0},
	{ArrièreplanRépété3: 0},
	{TAILLE: 0},
	{MOBILE: 0}
];

self.InstanceType = {
	Texte: class extends self.ITextInstance {},
	SELECTIONDIMAGE: class extends self.IWorldInstance {},
	Image: class extends self.ISpriteInstance {},
	Toucher: class extends self.IInstance {},
	Clavier: class extends self.IInstance {},
	Selected: class extends self.IWorldInstance {},
	Souris: class extends self.IInstance {},
	Hover: class extends self.IWorldInstance {},
	Attrappe: class extends self.ISpriteInstance {},
	INDICATION: class extends self.ITextInstance {},
	SaisieDeTexte: class extends self.ITextInputInstance {},
	BOUTON: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	ColorPicker: class extends self.IWorldInstance {},
	Sprite: class extends self.ISpriteInstance {},
	ColorPicker2: class extends self.IWorldInstance {},
	CaptureDuJeu: class extends self.IInstance {},
	ReconnaissanceVocale: class extends self.IInstance {},
	ArrièreplanRépété: class extends self.ITiledBackgroundInstance {},
	INDICATION2: class extends self.ITextInstance {},
	ScreenshotSprite: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	DownloadButton: class extends self.IButtonInstance {},
	TakeScreenshotButton: class extends self.IButtonInstance {},
	ArrièreplanRépété2: class extends self.ITiledBackgroundInstance {},
	FLASH: class extends self.ISpriteInstance {},
	ArrièreplanRépété3: class extends self.ITiledBackgroundInstance {},
	TAILLE: class extends self.ITiledBackgroundInstance {},
	MOBILE: class extends self.ITextInstance {}
}