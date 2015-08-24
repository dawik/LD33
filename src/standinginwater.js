Phaser.Filter.StandingInWater = function (game) {

    Phaser.Filter.call(this, game);

    this.uniforms.posY = { type: '1f', value: 0 };

    this.fragmentSrc = [

      "precision mediump float;",
      "varying vec2 vTextureCoord;",
      "varying vec4 vColor;",
      "uniform float posY;",
      "uniform vec2 resolution;",
      "uniform sampler2D uSampler;",

        "void main(void) {",

		"gl_FragColor = texture2D(uSampler, vTextureCoord);",
		//"if (gl_FragCoord.y >= posY && gl_FragColor.a != 0.0)",
		"if (gl_FragCoord.y <= posY && gl_FragColor.a != 0.0) {",
		//"if (gl_FragCoord.y <= posY) {",
			"gl_FragColor.a = 0.2;",
			"gl_FragColor.rgb = vec3(0,0,0);",
		"}",
		//"gl_FragColor.r += posY;",
		"}"
	];

};

Phaser.Filter.StandingInWater.prototype = Object.create(Phaser.Filter.prototype);
Phaser.Filter.StandingInWater.prototype.constructor = Phaser.Filter.StandingInWater;

Object.defineProperty(Phaser.Filter.StandingInWater.prototype, 'standinginwater', {

	get: function() {
		return this.uniforms.standinginwater.value;
	},

	set: function(value) {
		this.dirty = true;
		this.uniforms.standinginwater.value = value;
	}

});
