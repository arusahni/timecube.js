(function() {
	function Timecube() {
		var colors = {
			"common": [
					"#000075" //blue
					,"#0C0" //green
					,"#F00" //red
					,"#C00" //dark red
					,"#000" //black
			],
			"uncommon": [
				"#33F" //light blue
				,"#936" //purple
			],
			"off": [
				"#53813C" //off-green
				,"#900" //off-red
				,"#009" //off-blue
				,"#090" //green
			]
		};

		var BASE_FONT_SIZE = "12pt";

		function getNodes(root, blockTag) {
			var node = blockTag || 'p';
			return root.getElementsByTagName(node);
		}

		function getRandomColor() {
			//TODO: replace with something less simple/more math-y
			var x = Math.round(Math.random() * 1000);
			if (x < 700) {
				return colors.common[x % colors.common.length];
			} else if (x < 900) {
				return colors.uncommon[x % colors.uncommon.length];
			} else {
				return colors.off[x % colors.off.length];
			}
		}

		function getRandomFontSize() {
			//TODO: replace with something more math-y
			var x = Math.round(Math.random() * 1000);
			if (x < 100) {
				return 1 + (x % 4 / 10) + "em";
			} else if (x < 850) {
				return 1.4 + (x % 8 / 10) + "em";
			} else {
				return 2.2 + (x % 8 / 10) + "em";
			}
		}

		function style(node) {
			var color = getRandomColor();
			node.style.color = color;
			node.style.maxWidth = "40%";
			node.style.fontSize = getRandomFontSize();
			node.style.margin = "0 auto " + BASE_FONT_SIZE;
		}

		function timecubify(baseNode) {
			var root = document.querySelector(baseNode || 'body');
			var nodes = getNodes(root);
			root.style.textAlign = "center";
			root.style.fontSize = BASE_FONT_SIZE;
			root.style.fontFamily = "Times New Roman";
			for (var x = 0; x < nodes.length; x++) {
				style(nodes[x]);
			}
		}
		
		var self = {
			timecubify: timecubify
		};
		return self;
	};
	window['Timecube'] = Timecube();
})();
