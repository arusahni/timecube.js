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
		var BG_IMAGE = "data:image/png;base64,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";
		var SEPARATOR = "***************************************************************";
		
		function getNodes(root, blockTag) {
			var node = blockTag || 'p';
			return root.getElementsByTagName(node);
		}

		function getRandomInteger(multiplier) {
			return Math.round(Math.random() * (multiplier || 1000));
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
			if (x < 75) {
				return 1 + (x % 4 / 10) + "em";
			} else if (x < 850) {
				return 1.4 + (x % 8 / 10) + "em";
			} else {
				return 2.2 + (x % 8 / 10) + "em";
			}
		}

		function getRandomSeparator(color, size) {
			var x  = getRandomInteger();
			if (x < 270) {
				var large = getRandomInteger(10) > 6;
				var color = getRandomInteger(10) > 6 ? color : "#000";
				var sep = document.createElement('p');
				sep.style.color = color;
				sep.style.fontSize = large ? size : BASE_FONT_SIZE;
				sep.innerHTML = SEPARATOR.substring(0, large ? 20 : SEPARATOR.length);
				return sep;
			}
			return null;
		}

		function style(node) {
			node.style.color = getRandomColor();
			node.style.maxWidth = "50%"
			node.style.fontSize = getRandomFontSize();
			node.style.margin = "0 auto " + BASE_FONT_SIZE;
			return getRandomSeparator(node.style.color, node.style.fontSize);
		}

		function insertAfter(referenceNode, newNode) {
			referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
		}

		function timecubify(baseNode) {
			var root = document.querySelector(baseNode || 'body');
			var nodeList = getNodes(root);
			var nodes = [];
			// need to create a copy of nodelist so separators don't throw off the main loop
			// nifty for loop courtesy of http://stackoverflow.com/q/3199588/214197
			for(var i = nodeList.length; i--; nodes.unshift(nodeList[i]));
			root.style.background = "url(" + BG_IMAGE + ") white";
			root.style.textAlign = "center";
			root.style.fontSize = BASE_FONT_SIZE;
			root.style.fontColor = "#000";
			root.style.fontFamily = "Times New Roman";
			for (var x = 0; x < nodes.length; x++) {
				var sep = style(nodes[x]);
				if (sep !== null) {
					insertAfter(nodes[x], sep);
				}
			}
		}
		
		var self = {
			timecubify: timecubify
		};
		return self;
	};
	window['Timecube'] = Timecube();
})();
