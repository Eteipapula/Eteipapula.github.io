const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Touch,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.Text
	];
};
self.C3_JsPropNameTable = [
	{Toucher: 0},
	{Audio: 0},
	{Browser: 0},
	{Texte: 0}
];

self.InstanceType = {
	Toucher: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Texte: class extends self.ITextInstance {}
}