const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Behaviors.Anchor
	];
};
self.C3_JsPropNameTable = [
	{Ancre: 0},
	{Texte: 0}
];

self.InstanceType = {
	Texte: class extends self.ITextInstance {}
}