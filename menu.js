'use strict'
var NewComponent = function () {
	var callBacks = {},
	// component operating vars
        config,
        pageno=0,
        page_count,
        cycle_count = 1,
        turnPage,
        perPage = 10,
        row,
        page;

	function buildComponent() {
		// initialize counter
		row = 0,
        page = 0;
		for(var section in config.Sections) {
			//set logo
			$('.container-fluid #logo img').attr( 'src', config.logoImage);
			//set title
			$('.container-fluid #title').text(config.Sections[section].sectionName);
			//set content
			for(var g in config.Sections[section].items) {
				var item = config.Sections[section].items[g];
				if(row % perPage === 0 ){
					pageno += 1;
					setWrapper(pageno);
					//this.pageno = pageno;
				} 
				setRows(item, row+1, pageno);
				row+=1;
			}
			//set footer
			$('#footer').text(config.Sections[section].sectionFooter);
			// init pagination
		    rotatePages(1)
		}
	}

	function setWrapper(page_no) {
		$('<div/>', {
		    id: 'page_'+page_no,
		    class: 'pages'
		}).appendTo('.container-fluid .row');
	}
	
	function setRows(item, number, p) {
		$('.container-fluid .row #page_'+p).append('<div class="col-xs-12 col-lg-6" id="row_'+number+' "><div class="col-xs-10 col-sm-10"><div class="item-name"> '+item.itemName+'</div><div class="description">'+item.itemDescription+' </div></div><div class="col-xs-2 col-sm-2"><div class="price-list"> '+item.prices[0].priceAmount+'</div></div></div>')
	}

	function rotatePages(i) {
		$('.pages').hide();
		$('#page_'+i).show();
	}

	function startComponent() {
		buildComponent();
		page_count = 2 // show second page after 5 seconds initially
		turnPage = setInterval(function(){
            rotatePages(page_count)
			if(pageno === page_count){
                if(cycle_count === config.cycle) {
                    cycle_count++;
                    console.log(cycle_count, config.cycle);
                    setTimeout(cycleComplete, config.timeout * 1000);
                    return;
                }
                cycle_count++;
                page_count = 1;
			}else{
				page_count+=1;
			}
            
		}, config.timeout * 1000);
	}

	function failedToLoadConfig(err) {
		// send errors to famework
		callBacks.sendError(err);
	}
	//Call when all component has done full cycle
	function cycleComplete() {
        clearInterval(turnPage);
		callBacks.cycleComplete(true, {});
	}


	function destroy() {
		// end component logic
	}

	return {
		setCallbacks: function (obj) {
            callBacks = obj;
            console.warn("Call Backs Set: ", callBacks);
        },
		setConfigVars: function (obj) {
			try {
				config = obj;
			} catch (err) {
				failedToLoadConfig(err);
				return;
			}

			startComponent();
		},
		start: startComponent,
		stop: function () {
			destroy();
		}
	}

	}

	//exposed function calls
	var Component = new NewComponent();

	var StartComponent = function () {
	   Component.start();
	}
	var SetConfig = function (obj) {
	   Component.configObj = obj;
	}

	var StopComponent = function () {
	   Component.stop();
	}

	var SetConfigVars = function (obj) { 
	   Component.setConfigVars(obj);
	}

	var SetCallbacks = function (obj) {
	   Component.callBacks = {};
	}

	// enable for development. comment out before push

	// console.log("initing component");

	//HERE DOWN IS DONE FOR TESING OUTSIDE OF FRAME WORK
	var obj={
        timeout: 5,
        cycle: 0,
        logoImage: 'images/image1.png',
        Sections: [{
            sectionName: "Menu Title",
            items: [{
                itemName: "Item1",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.30"
                }]
                
            },
            {
                itemName: "Item2",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.20"
                }]
                
            },
            {
                itemName: "Item3",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.40"
                }]
                
            },
            {
                itemName: "Item4",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$5.20"
                }]
                
            },
            {
                itemName: "Item5",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$3.20"
                }]
                
            },
            {
                itemName: "Item6",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.30"
                }]
                
            },
            {
                itemName: "Item7",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.20"
                }]
                
            },
            {
                itemName: "Item8",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.40"
                }]
                
            },
            {
                itemName: "Item9",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$5.20"
                }]
                
            },
            {
                itemName: "Item10",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$3.20"
                }]
                
            },
            {
                itemName: "Item11",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.30"
                }]
                
            },
            {
                itemName: "Item12",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.20"
                }]
                
            },
            {
                itemName: "Item13",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.40"
                }]
                
            },
            {
                itemName: "Item14",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$5.20"
                }]
                
            },
            {
                itemName: "Item15",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$3.20"
                }]
                
            },
            {
                itemName: "Item16",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.30"
                }]
                
            },
            {
                itemName: "Item17",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.20"
                }]
                
            },
            {
                itemName: "Item18",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.40"
                }]
                
            },
            {
                itemName: "Item 19",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$5.20"
                }]
                
            },
            {
                itemName: "Item 20",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$3.20"
                }]
                
            },
            {
				itemName: "Item 21",
				itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.30"
                }]
				
			},
			{
				itemName: "Item 22",
				itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.20"
                }]
				
			},
			{
				itemName: "Item 23",
				itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.40"
                }]
				
			},
			{
				itemName: "Item 24",
				itemDescription: "Item description",
                prices:[{
                    priceAmount: "$5.20"
                }]
				
			},
			{
				itemName: "Item 25",
				itemDescription: "Item description",
                prices: [{
                    priceAmount: "$3.20"
                }]
				
			},
			{
				itemName: "Item 26",
				itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.30"
                }]
				
			},
			{
				itemName: "Item 27",
				itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.20"
                }]
				
			},
			{
				itemName: "Item 28",
				itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.40"
                }]
				
			},
			{
				itemName: "Item 29",
				itemDescription: "Item description",
                prices: [{
                    priceAmount: "$5.20"
                }]
				
			},
			{
				itemName: "Item 30",
				itemDescription: "Item description",
                prices: [{
                    priceAmount: "$3.20"
                }]
				
			},
			{
                itemName: "Item 31",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.30"
                }]
                
            },
            {
                itemName: "Item 32",
                itemDescription: "Item description",
                prices:[{
                    priceAmount: "$1.20"
                }]
                
            },
            {
                itemName: "Item 33",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.40"
                }]
                
            },
            {
                itemName: "Item 34",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$5.20"
                }]
                
            },
            {
                itemName: "Item 35",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$3.20"
                }]
                
            },
            {
                itemName: "Item 36",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.30"
                }]
                
            },
            {
                itemName: "Item 37",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.20"
                }]
                
            },
            {
                itemName: "Item 38",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$1.40"
                }]
                
            },
            {
                itemName: "Item 39",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$5.20"
                }]
                
            },
            {
                itemName: "Item 40",
                itemDescription: "Item description",
                prices: [{
                    priceAmount: "$3.20"
                }]
                
            }],
			sectionFooter: "Come back again"
        }]  
    };

    SetConfigVars(obj);


