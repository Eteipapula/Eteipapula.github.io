const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Touch,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.Text,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Touch.Exps.TouchID,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.System.Exps.scrollx,
		C3.Plugins.System.Exps.layerscale,
		C3.Plugins.System.Exps.scrolly,
		C3.Plugins.Touch.Cnds.OnTouchEnd
	];
};
self.C3_JsPropNameTable = [
	{Toucher: 0},
	{Audio: 0},
	{Browser: 0},
	{Texte: 0},
	{TouchPanID: 0},
	{TouchLastX: 0},
	{TouchLastY: 0}
];

self.InstanceType = {
	Toucher: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Texte: class extends self.ITextInstance {}
}