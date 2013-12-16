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

		function style(node) {
			var color = getRandomColor();
			node.style.color = color;
		}

		function timecubify(baseNode) {
			var root = document.querySelector(baseNode || 'body');
			var nodes = getNodes(root);
			for (var x = 0; x < nodes.length; x++) {
				style(nodes[x]);
			}
		}
		
		var self = {
			timecubify: timecubify
		};
		return self;
	};
	console.log(Timecube);
	window['Timecube'] = Timecube();
})();
