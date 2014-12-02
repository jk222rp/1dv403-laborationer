{"changed":true,"filter":false,"title":"memory.js","tooltip":"/3-gameon/memory/script/memory.js","value":"\"use strict\";\n\nvar Memory = {\n    \n    init: function() {\n        var rows = 4;\n        var cols = 4;\n        \n        Memory.randoms = RandomGenerator.getPictureArray(rows, cols);\n        \n        Memory.createGame(rows, cols);\n    },\n    \n    //Array with the random numbers\n    randoms: [],\n    \n    //Creates a table with the images in the game\n    createGame: function(rows, cols) {\n        \n        var container = document.getElementById(\"container\");\n        var table = document.createElement(\"table\");\n        var count = 0;\n        \n        for (var i = 0; i < rows; i++) {\n            var tr = document.createElement(\"tr\");\n            \n            for (var j = 0; j < cols; j++) {\n                var td = document.createElement(\"td\");\n                td.id = \"col\" + count;\n                \n                var img = document.createElement(\"img\");\n                //img.src = \"pics/\" + Memory.randoms[count] + \".png\";\n                img.src = \"pics/0.png\";\n                td.appendChild(img);\n                \n                tr.appendChild(td);\n                ++count;\n            }\n            \n            table.appendChild(tr);\n        }\n        \n        container.appendChild(table);\n    }\n    \n};\n\nwindow.onload = Memory.init;","undoManager":{"mark":-2363,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":43,"column":13},"end":{"row":43,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":14},"end":{"row":43,"column":15},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":15},"end":{"row":43,"column":16},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":16},"end":{"row":43,"column":17},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":17},"end":{"row":43,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":18},"end":{"row":43,"column":19},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":19},"end":{"row":43,"column":21},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":20},"end":{"row":43,"column":21},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":21},"end":{"row":43,"column":22},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":22},"end":{"row":43,"column":23},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":23},"end":{"row":43,"column":24},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":20},"end":{"row":43,"column":24},"action":"remove","lines":["Memo"]},{"start":{"row":43,"column":20},"end":{"row":43,"column":26},"action":"insert","lines":["Memory"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":26},"end":{"row":43,"column":27},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":27},"end":{"row":43,"column":28},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":28},"end":{"row":43,"column":29},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":27},"end":{"row":43,"column":29},"action":"remove","lines":["ra"]},{"start":{"row":43,"column":27},"end":{"row":43,"column":34},"action":"insert","lines":["randoms"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":35},"end":{"row":43,"column":36},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":37},"end":{"row":43,"column":36},"action":"remove","lines":["","        ","        table.setAttribute(\"border\", \"1px solid black\");","        console.log(Memory.randoms);"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":67},"end":{"row":31,"column":67},"action":"insert","lines":["","                img.src = \"pics/\" + Memory.randoms[count] + \".png\";"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":32},"end":{"row":31,"column":61},"action":"remove","lines":["\" + Memory.randoms[count] + \""]},{"start":{"row":31,"column":32},"end":{"row":31,"column":33},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":54},"end":{"row":28,"column":0},"action":"insert","lines":["",""]},{"start":{"row":28,"column":0},"end":{"row":28,"column":16},"action":"insert","lines":["                "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":18},"end":{"row":28,"column":19},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":19},"end":{"row":28,"column":20},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":20},"end":{"row":28,"column":21},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":21},"end":{"row":28,"column":22},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":22},"end":{"row":28,"column":23},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":23},"end":{"row":28,"column":24},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":24},"end":{"row":28,"column":25},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":25},"end":{"row":28,"column":26},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":26},"end":{"row":28,"column":27},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":27},"end":{"row":28,"column":28},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":28},"end":{"row":28,"column":29},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":29},"end":{"row":28,"column":30},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":24},"end":{"row":28,"column":25},"action":"insert","lines":["\""]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":25},"end":{"row":28,"column":26},"action":"insert","lines":["\""]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":26},"end":{"row":28,"column":27},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":27},"end":{"row":28,"column":28},"action":"insert","lines":["+"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":28},"end":{"row":28,"column":29},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":25},"end":{"row":28,"column":26},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":26},"end":{"row":28,"column":27},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":26},"end":{"row":28,"column":27},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":25},"end":{"row":28,"column":26},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":25},"end":{"row":28,"column":26},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":26},"end":{"row":28,"column":27},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":27},"end":{"row":28,"column":28},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":28},"end":{"row":28,"column":29},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":28},"end":{"row":28,"column":29},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":37},"end":{"row":43,"column":0},"action":"insert","lines":["",""]},{"start":{"row":43,"column":0},"end":{"row":43,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":8},"end":{"row":44,"column":0},"action":"insert","lines":["",""]},{"start":{"row":44,"column":0},"end":{"row":44,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":8},"end":{"row":44,"column":9},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":9},"end":{"row":44,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":10},"end":{"row":44,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":11},"end":{"row":44,"column":12},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":12},"end":{"row":44,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":13},"end":{"row":44,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":13},"end":{"row":44,"column":14},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":12},"end":{"row":44,"column":13},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":11},"end":{"row":44,"column":12},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":11},"end":{"row":44,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":12},"end":{"row":44,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":13},"end":{"row":44,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":14},"end":{"row":44,"column":15},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":15},"end":{"row":44,"column":16},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":16},"end":{"row":44,"column":17},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":17},"end":{"row":44,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":18},"end":{"row":44,"column":19},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":19},"end":{"row":44,"column":21},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":21},"end":{"row":44,"column":22},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":20},"end":{"row":44,"column":21},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":20},"end":{"row":44,"column":21},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":20},"end":{"row":44,"column":21},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":21},"end":{"row":44,"column":22},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":22},"end":{"row":44,"column":23},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":23},"end":{"row":44,"column":24},"action":"insert","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":23},"end":{"row":44,"column":24},"action":"remove","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":23},"end":{"row":44,"column":24},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":23},"end":{"row":44,"column":24},"action":"remove","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":22},"end":{"row":44,"column":23},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":21},"end":{"row":44,"column":22},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":20},"end":{"row":44,"column":21},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":20},"end":{"row":44,"column":21},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":21},"end":{"row":44,"column":22},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":22},"end":{"row":44,"column":23},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":23},"end":{"row":44,"column":24},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":24},"end":{"row":44,"column":25},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":25},"end":{"row":44,"column":26},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":26},"end":{"row":44,"column":27},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":27},"end":{"row":44,"column":28},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":28},"end":{"row":44,"column":29},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":29},"end":{"row":44,"column":30},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":30},"end":{"row":44,"column":31},"action":"insert","lines":["H"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":31},"end":{"row":44,"column":32},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":32},"end":{"row":44,"column":33},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":33},"end":{"row":44,"column":34},"action":"insert","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":36},"end":{"row":45,"column":36},"action":"insert","lines":["","        console.log(col1.innerHTML);"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":23},"end":{"row":45,"column":24},"action":"remove","lines":["1"]},{"start":{"row":45,"column":23},"end":{"row":45,"column":24},"action":"insert","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":37},"end":{"row":45,"column":36},"action":"remove","lines":["","        ","        console.log(col1.innerHTML);","        console.log(col2.innerHTML);"]}]}]]},"ace":{"folds":[],"scrolltop":180,"scrollleft":0,"selection":{"start":{"row":42,"column":37},"end":{"row":42,"column":37},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":11,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1417554158422}