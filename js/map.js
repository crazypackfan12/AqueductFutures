function initialize() { 
	var mapProp = { 
    	center:new google.maps.LatLng(35.918278,-119.157715), 
    	zoom:7, 
    	mapTypeId:google.maps.MapTypeId.ROADMAP 
    }; 
	
	var styles = [
		{
			featureType: "water",
			elementType: "geometry",
			stylers:[{ "color": "#4195ac" }]
		},
		{
			elementType: "labels.text",
			stylers: [{ "visibility": "off" }]
		},
		{
			featureType:"road",
			stylers: [ { visibility: "off" } ]
		},
		{
			featureType:"poi",
			elementType: "labels.icon",
			stylers: [ { visibility: "off" } ]
		},
		{
			featureType: "administrative",
			elementType: "labels",
			stylers: [{ "visibility": "off"}]
  		},
		{
    		featureType: "landscape.natural.terrain",
    		elementType: "geometry.fill",
    		stylers: [
      				{ "weight": 0.1 },
      				{ "visibility": "on" },
      				{ "saturation": 4 },
      				{ "lightness": -85 },
      				{ "gamma": 1 },
      				{ "hue": "#0000ff" }
    		]
  		}
		
	];
	
	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp); 
  
	map.setOptions({styles: styles});
	
	var bgline = 
    [  
      new google.maps.LatLng(37.979278,-119.135742),  
      new google.maps.LatLng(37.961956,-119.168701),  
      new google.maps.LatLng(37.931634,-119.171448),  
      new google.maps.LatLng(37.916468,-119.165955),  
      new google.maps.LatLng(37.894797,-119.146729),  
      new google.maps.LatLng(37.879623,-119.130249),  
      new google.maps.LatLng(37.877455,-119.091797),  
      new google.maps.LatLng(37.877455,-119.078064),  
      new google.maps.LatLng(37.868783,-119.020386),  
      new google.maps.LatLng(37.849266,-118.959961),  
      new google.maps.LatLng(37.834083,-118.927002),  
      new google.maps.LatLng(37.803708,-118.899536),  
      new google.maps.LatLng(37.764635,-118.88031),  
      new google.maps.LatLng(37.727715,-118.850098),  
      new google.maps.LatLng(37.690776,-118.819885),  
      new google.maps.LatLng(37.647294,-118.781433),  
      new google.maps.LatLng(37.625544,-118.764954),  
      new google.maps.LatLng(37.603787,-118.742981),  
      new google.maps.LatLng(37.577671,-118.721008),  
      new google.maps.LatLng(37.56461,-118.67157),  
      new google.maps.LatLng(37.518876,-118.627625),  
      new google.maps.LatLng(37.497088,-118.622131),  
      new google.maps.LatLng(37.466575,-118.622131),  
      new google.maps.LatLng(37.451313,-118.616638),  
      new google.maps.LatLng(37.431687,-118.578186),  
      new google.maps.LatLng(37.422962,-118.536987),  
      new google.maps.LatLng(37.392418,-118.490295),  
      new google.maps.LatLng(37.370594,-118.473816),  
      new google.maps.LatLng(37.346579,-118.46283),  
      new google.maps.LatLng(37.331293,-118.43811),  
      new google.maps.LatLng(37.320373,-118.416138),  
      new google.maps.LatLng(37.300712,-118.383179),  
      new google.maps.LatLng(37.278861,-118.377686),  
      new google.maps.LatLng(37.224205,-118.361206),  
      new google.maps.LatLng(37.195768,-118.352966),  
      new google.maps.LatLng(37.158565,-118.339233),  
      new google.maps.LatLng(37.154187,-118.295288),  
      new google.maps.LatLng(37.136673,-118.262329),  
      new google.maps.LatLng(37.07534,-118.234863),  
      new google.maps.LatLng(37.040271,-118.22113),  
      new google.maps.LatLng(36.965694,-118.193665),  
      new google.maps.LatLng(36.930574,-118.190918),  
      new google.maps.LatLng(36.904223,-118.171692),  
      new google.maps.LatLng(36.847098,-118.146973),  
      new google.maps.LatLng(36.805326,-118.122253),  
      new google.maps.LatLng(36.765732,-118.086548),  
      new google.maps.LatLng(36.726117,-118.056335),  
      new google.maps.LatLng(36.675468,-118.034363),  
      new google.maps.LatLng(36.631399,-118.026123),  
      new google.maps.LatLng(36.59833,-118.02063),  
      new google.maps.LatLng(36.563041,-117.995911),  
      new google.maps.LatLng(36.543184,-117.976685),  
      new google.maps.LatLng(36.505662,-117.982178),  
      new google.maps.LatLng(36.474748,-117.982178),  
      new google.maps.LatLng(36.428354,-118.02063),  
      new google.maps.LatLng(36.381933,-118.02063),  
      new google.maps.LatLng(36.297861,-118.001404),  
      new google.maps.LatLng(36.282364,-117.998657),  
      new google.maps.LatLng(36.26465,-118.026123),  
      new google.maps.LatLng(36.242501,-118.034363),  
      new google.maps.LatLng(36.211482,-118.034363),  
      new google.maps.LatLng(36.195968,-118.015137),  
      new google.maps.LatLng(36.167149,-118.01239),  
      new google.maps.LatLng(36.140536,-118.006897),  
      new google.maps.LatLng(36.096163,-118.00415),  
      new google.maps.LatLng(36.065086,-117.990417),  
      new google.maps.LatLng(36.029555,-117.976685),  
      new google.maps.LatLng(35.998452,-117.951965),  
      new google.maps.LatLng(35.96956,-117.938232),  
      new google.maps.LatLng(35.925089,-117.9245),  
      new google.maps.LatLng(35.878369,-117.905273),  
      new google.maps.LatLng(35.8383,-117.888794),  
      new google.maps.LatLng(35.800439,-117.886047),  
      new google.maps.LatLng(35.735812,-117.888794),  
      new google.maps.LatLng(35.677825,-117.883301),  
      new google.maps.LatLng(35.630958,-117.894287),  
      new google.maps.LatLng(35.604165,-117.921753),  
      new google.maps.LatLng(35.586298,-117.962952),  
      new google.maps.LatLng(35.563959,-117.998657),  
      new google.maps.LatLng(35.528203,-118.026123),  
      new google.maps.LatLng(35.496903,-118.045349),  
      new google.maps.LatLng(35.470065,-118.048096),  
      new google.maps.LatLng(35.429792,-118.053589),  
      new google.maps.LatLng(35.393976,-118.048096),  
      new google.maps.LatLng(35.358592,-118.009644),  
      new google.maps.LatLng(35.295849,-118.009644),  
      new google.maps.LatLng(35.206131,-118.059082),  
      new google.maps.LatLng(35.147761,-118.174438),  
      new google.maps.LatLng(35.102833,-118.240356),  
      new google.maps.LatLng(35.062376,-118.300781),  
      new google.maps.LatLng(35.008403,-118.43811),  
      new google.maps.LatLng(34.945389,-118.553467),  
      new google.maps.LatLng(34.87782,-118.66333),  
      new google.maps.LatLng(34.814705,-118.707275),  
      new google.maps.LatLng(34.769594,-118.701782),  
      new google.maps.LatLng(34.765081,-118.652344),  
      new google.maps.LatLng(34.742515,-118.608398),  
      new google.maps.LatLng(34.710912,-118.504028),  
      new google.maps.LatLng(34.683814,-118.410645),  
      new google.maps.LatLng(34.634112,-118.317261),  
      new google.maps.LatLng(34.552716,-118.240356),  
      new google.maps.LatLng(34.502935,-118.201904),  
      new google.maps.LatLng(34.435004,-118.251343),  
      new google.maps.LatLng(34.362483,-118.267822),  
      new google.maps.LatLng(34.280822,-118.289795),  
      new google.maps.LatLng(34.208168,-118.284302),  
      new google.maps.LatLng(34.126357,-118.267822),  
      new google.maps.LatLng(34.071772,-118.256836)  
    ];  
	
	var points1 = 
	[ 
	  new google.maps.LatLng(37.979278,-119.135742), 
	  new google.maps.LatLng(37.961956,-119.168701),
	  new google.maps.LatLng(37.931634,-119.171448), 
	  new google.maps.LatLng(37.916468,-119.165955), 
	  new google.maps.LatLng(37.894797,-119.146729)
	  ];
	var points2 = [
	  new google.maps.LatLng(37.894797,-119.146729),	 
	  new google.maps.LatLng(37.879623,-119.130249), 
	  new google.maps.LatLng(37.877455,-119.091797), 
	  new google.maps.LatLng(37.877455,-119.078064), 
	  new google.maps.LatLng(37.868783,-119.020386)
	  ];
	var points3 = [ 
	  new google.maps.LatLng(37.868783,-119.020386),
	  new google.maps.LatLng(37.849266,-118.959961), 
	  new google.maps.LatLng(37.834083,-118.927002), 
	  new google.maps.LatLng(37.834083,-118.927002),
	  new google.maps.LatLng(37.803708,-118.899536) 
	  ];
	var points4 = [
	  new google.maps.LatLng(37.803708,-118.899536),  
	  new google.maps.LatLng(37.764635,-118.88031), 
	  new google.maps.LatLng(37.727715,-118.850098), 
	  new google.maps.LatLng(37.690776,-118.819885), 
	  new google.maps.LatLng(37.647294,-118.781433)
	  ];
	var points5 = [
	  new google.maps.LatLng(37.647294,-118.781433), 
	  new google.maps.LatLng(37.625544,-118.764954), 
	  new google.maps.LatLng(37.603787,-118.742981), 
	  new google.maps.LatLng(37.577671,-118.721008), 
	  new google.maps.LatLng(37.56461,-118.67157)
	  ];
	var points6 = [
	  new google.maps.LatLng(37.56461,-118.67157),  
	  new google.maps.LatLng(37.518876,-118.627625), 
	  new google.maps.LatLng(37.497088,-118.622131), 
	  new google.maps.LatLng(37.497088,-118.622131),
	  new google.maps.LatLng(37.466575,-118.622131)
	  ]; 
	var points7 = [
	  new google.maps.LatLng(37.466575,-118.622131), 	
	  new google.maps.LatLng(37.451313,-118.616638), 
	  new google.maps.LatLng(37.431687,-118.578186), 
	  new google.maps.LatLng(37.422962,-118.536987), 
	  new google.maps.LatLng(37.392418,-118.490295)
	  ]; 
	var points8 = [
	  new google.maps.LatLng(37.392418,-118.490295),
	  new google.maps.LatLng(37.370594,-118.473816), 
	  new google.maps.LatLng(37.346579,-118.46283), 
	  new google.maps.LatLng(37.331293,-118.43811), 
	  new google.maps.LatLng(37.320373,-118.416138)
	  ]; 
	var points9 = [
	  new google.maps.LatLng(37.320373,-118.416138),
	  new google.maps.LatLng(37.300712,-118.383179), 
	  new google.maps.LatLng(37.278861,-118.377686), 
	  new google.maps.LatLng(37.278861,-118.377686), 
	  new google.maps.LatLng(37.224205,-118.361206)
	  ]; 
    var points10 = [
	  new google.maps.LatLng(37.224205,-118.361206),
	  new google.maps.LatLng(37.195768,-118.352966), 
	  new google.maps.LatLng(37.158565,-118.339233), 
	  new google.maps.LatLng(37.154187,-118.295288), 
	  new google.maps.LatLng(37.136673,-118.262329)
	  ];
	var points11 = [
	  new google.maps.LatLng(37.136673,-118.262329), 	 
	  new google.maps.LatLng(37.07534,-118.234863), 
	  new google.maps.LatLng(37.040271,-118.22113), 
	  new google.maps.LatLng(36.965694,-118.193665), 
	  new google.maps.LatLng(36.930574,-118.190918)
	  ];
	var points12 = [
	  new google.maps.LatLng(36.930574,-118.190918),	 
	  new google.maps.LatLng(36.904223,-118.171692), 
	  new google.maps.LatLng(36.847098,-118.146973), 
	  new google.maps.LatLng(36.847098,-118.146973),
	  new google.maps.LatLng(36.805326,-118.122253)
	  ];
	var points13 = [ 
	  new google.maps.LatLng(36.805326,-118.122253),
	  new google.maps.LatLng(36.765732,-118.086548), 
	  new google.maps.LatLng(36.726117,-118.056335), 
	  new google.maps.LatLng(36.675468,-118.034363), 
	  new google.maps.LatLng(36.631399,-118.026123)
	  ];
	var points14 = [
	  new google.maps.LatLng(36.631399,-118.026123), 
	  new google.maps.LatLng(36.59833,-118.02063), 
	  new google.maps.LatLng(36.563041,-117.995911), 
	  new google.maps.LatLng(36.543184,-117.976685), 
	  new google.maps.LatLng(36.505662,-117.982178)
	  ]; 
	var points15 = [
	  new google.maps.LatLng(36.505662,-117.982178),	
	  new google.maps.LatLng(36.474748,-117.982178), 
	  new google.maps.LatLng(36.474748,-117.982178),
	  new google.maps.LatLng(36.428354,-118.02063), 
	  new google.maps.LatLng(36.381933,-118.02063)
	  ];
	var points16 = [
	  new google.maps.LatLng(36.381933,-118.02063),
	  new google.maps.LatLng(36.297861,-118.001404), 
	  new google.maps.LatLng(36.282364,-117.998657), 
	  new google.maps.LatLng(36.26465,-118.026123), 
	  new google.maps.LatLng(36.242501,-118.034363)
	  ];
	var points17 = [
	  new google.maps.LatLng(36.242501,-118.034363), 
	  new google.maps.LatLng(36.211482,-118.034363), 
	  new google.maps.LatLng(36.195968,-118.015137), 
	  new google.maps.LatLng(36.167149,-118.01239), 
	  new google.maps.LatLng(36.140536,-118.006897)
	  ];
	var points18 = [
	  new google.maps.LatLng(36.140536,-118.006897), 
	  new google.maps.LatLng(36.096163,-118.00415), 
      new google.maps.LatLng(36.096163,-118.00415), 
	  new google.maps.LatLng(36.065086,-117.990417), 
	  new google.maps.LatLng(36.029555,-117.976685)
	  ];
	var points19 = [
	  new google.maps.LatLng(36.029555,-117.976685),  
	  new google.maps.LatLng(35.998452,-117.951965), 
	  new google.maps.LatLng(35.96956,-117.938232), 
	  new google.maps.LatLng(35.925089,-117.9245), 
	  new google.maps.LatLng(35.878369,-117.905273)
	  ];
	var points20 = [
	  new google.maps.LatLng(35.878369,-117.905273), 
	  new google.maps.LatLng(35.8383,-117.888794), 
	  new google.maps.LatLng(35.800439,-117.886047), 
	  new google.maps.LatLng(35.735812,-117.888794), 
	  new google.maps.LatLng(35.677825,-117.883301)
	  ];
	var points21 = [
	  new google.maps.LatLng(35.677825,-117.883301), 
	  new google.maps.LatLng(35.630958,-117.894287), 
	  new google.maps.LatLng(35.630958,-117.894287),
	  new google.maps.LatLng(35.604165,-117.921753), 
	  new google.maps.LatLng(35.586298,-117.962952)
	  ];
	var points22 = [
	  new google.maps.LatLng(35.586298,-117.962952), 
	  new google.maps.LatLng(35.563959,-117.998657), 
	  new google.maps.LatLng(35.528203,-118.026123), 
	  new google.maps.LatLng(35.496903,-118.045349), 
	  new google.maps.LatLng(35.470065,-118.048096)
	  ];
	var points23 = [
	  new google.maps.LatLng(35.470065,-118.048096), 
	  new google.maps.LatLng(35.429792,-118.053589), 
	  new google.maps.LatLng(35.393976,-118.048096), 
	  new google.maps.LatLng(35.358592,-118.009644), 
	  new google.maps.LatLng(35.295849,-118.009644)
	  ];
	var points24 = [
	  new google.maps.LatLng(35.295849,-118.009644), 
	  new google.maps.LatLng(35.206131,-118.059082), 
	  new google.maps.LatLng(35.206131,-118.059082),
	  new google.maps.LatLng(35.147761,-118.174438), 
	  new google.maps.LatLng(35.102833,-118.240356)
	  ];
	var points25 = [
	  new google.maps.LatLng(35.102833,-118.240356),
	  new google.maps.LatLng(35.062376,-118.300781), 
	  new google.maps.LatLng(35.008403,-118.43811), 
	  new google.maps.LatLng(34.945389,-118.553467), 
	  new google.maps.LatLng(34.87782,-118.66333)
	  ];
	var points26 = [
	  new google.maps.LatLng(34.87782,-118.66333),
	  new google.maps.LatLng(34.814705,-118.707275), 
	  new google.maps.LatLng(34.769594,-118.701782), 
	  new google.maps.LatLng(34.765081,-118.652344), 
	  new google.maps.LatLng(34.742515,-118.608398)
	  ];
	var points27 = [
	  new google.maps.LatLng(34.742515,-118.608398), 
	  new google.maps.LatLng(34.710912,-118.504028),
	  new google.maps.LatLng(34.710912,-118.504028),
	  new google.maps.LatLng(34.683814,-118.410645), 
	  new google.maps.LatLng(34.634112,-118.317261)
	  ];
	var points28 = [
	  new google.maps.LatLng(34.634112,-118.317261), 
	  new google.maps.LatLng(34.552716,-118.240356), 
	  new google.maps.LatLng(34.502935,-118.201904), 
	  new google.maps.LatLng(34.435004,-118.251343), 
	  new google.maps.LatLng(34.362483,-118.267822)
	  ];
	var points29 = [
	  new google.maps.LatLng(34.362483,-118.267822), 
	  new google.maps.LatLng(34.280822,-118.289795), 
	  new google.maps.LatLng(34.208168,-118.284302), 
	  new google.maps.LatLng(34.126357,-118.267822), 
	  new google.maps.LatLng(34.071772,-118.256836)
	]; 
	
	var image = '../images/map_markers/ics_orig.png';
	var monoLakeLabel = '../images/map_markers/MonoLake.png';
	var owensLakeLabel = '../images/map_markers/OwensLake.png';
	var losAngelesLabel = '../images/map_markers/LosAngeles.png';
	var infoimage1 = '../images/slide_gallery/test1.png';
	var infoimage2 = '../images/slide_gallery/test2.png';
	
	var polyline1 = new google.maps.Polyline({path:points1, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline2 = new google.maps.Polyline({path:points2, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline3 = new google.maps.Polyline({path:points3, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline4 = new google.maps.Polyline({path:points4, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 }); 
	var polyline5 = new google.maps.Polyline({path:points5, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 }); 
	var polyline6 = new google.maps.Polyline({path:points6, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 }); 
	var polyline7 = new google.maps.Polyline({path:points7, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 }); 
	var polyline8 = new google.maps.Polyline({path:points8, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 }); 
	var polyline9 = new google.maps.Polyline({path:points9, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 }); 
	var polyline10 = new google.maps.Polyline({path:points10, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline11 = new google.maps.Polyline({path:points11, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline12 = new google.maps.Polyline({path:points12, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline13 = new google.maps.Polyline({path:points13, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline14 = new google.maps.Polyline({path:points14, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline15 = new google.maps.Polyline({path:points15, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline16 = new google.maps.Polyline({path:points16, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline17 = new google.maps.Polyline({path:points17, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline18 = new google.maps.Polyline({path:points18, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline19 = new google.maps.Polyline({path:points19, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline20 = new google.maps.Polyline({path:points20, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline21 = new google.maps.Polyline({path:points21, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline22 = new google.maps.Polyline({path:points22, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline23 = new google.maps.Polyline({path:points23, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline24 = new google.maps.Polyline({path:points24, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline25 = new google.maps.Polyline({path:points25, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline26 = new google.maps.Polyline({path:points26, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline27 = new google.maps.Polyline({path:points27, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline28 = new google.maps.Polyline({path:points28, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });
	var polyline29 = new google.maps.Polyline({path:points29, 
											 strokeColor:"#76AED0", 
											 strokeOpacity:1.0, 
											 strokeWeight:4 
											 });

											 											 	 
	var bgline = new google.maps.Polyline({ path: bgline,
											strokeColor:"#6d584a",
											strokeOpacity:1.0,
											strokeWeight:4
											});
											
											 
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(37.980638,-119),
		icon: image
		});
		
	var infowindow2 = new google.maps.InfoWindow({
	  content: '<img src="../images/slide_gallery/test1.jpg" width=200px height=200px />',
	  maxWidth: 300,
	  maxHeight: 300,
	  disableAutoPan: true
	  });
	  
	var infowindow3 = new google.maps.InfoWindow({
	  content: '<img src="../images/slide_gallery/test2.jpg" width=200px height=200px>',
	  maxWidth: 300,
	  maxHeight: 300,
	  disableAutoPan: true
	  });
	  
	var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(36.930574,-118.190918)
	});
	
	var marker3 = new google.maps.Marker({
		position: new google.maps.LatLng(35.878369,-117.905273)
	});
	
	var marker4 = new google.maps.Marker({
		position: new google.maps.LatLng(36.436157,-117.9600466),
		icon: image
		});

	// var endpoint = new google.maps.Marker({
		// position: new google.maps.LatLng(34.071772,-118.256836),
		// icon: endimage
		// });
		
	var owensLabel = new google.maps.Marker({
		position: new google.maps.LatLng(36.456446,-117.559891), 
		icon: owensLakeLabel
		});
		
	var monoLabel = new google.maps.Marker({
		position: new google.maps.LatLng(38.000305,-118.506088), 
		icon: monoLakeLabel
		});
		
	var losAngelesLabel = new google.maps.Marker({
		position: new google.maps.LatLng(34.055877,-117.826309), 
		icon: losAngelesLabel
		});
	
	//endpoint.setMap(map); 
	marker.setMap(map);
	marker4.setMap(map); 
	owensLabel.setMap(map); 
	monoLabel.setMap(map); 
	losAngelesLabel.setMap(map); 
	
	
	google.maps.event.addListener(map, 'zoom_changed', function() {
		if(map.getZoom() >= 8)
		{
			owensLabel.position = new google.maps.LatLng(36.437667,-117.970505);
			monoLabel.position = new google.maps.LatLng(37.993626,-118.991547);
			losAngelesLabel.position = new google.maps.LatLng(34.042890,-118.239326);
			
			owensLabel.setMap(map); 
			monoLabel.setMap(map); 
			losAngelesLabel.setMap(map); 
		}
		
		else if(map.getZoom() <= 7)
		{
			owensLabel.position = new google.maps.LatLng(36.456446,-117.559891);
			monoLabel.position = new google.maps.LatLng(38.000305,-118.506088);
			losAngelesLabel.position = new google.maps.LatLng(34.055877,-117.826309);
			
			owensLabel.setMap(map); 
			monoLabel.setMap(map); 
			losAngelesLabel.setMap(map); 
		}
		
	});
	var reps = 0;
	var intervaltimer = new Date().getMilliseconds() + 1000;
	while(reps != 10){
		intervaltimer = intervaltimer + 3000;
		if (reps == 0)
		{
			setTimeout(function() {bgline.setMap(map); }, intervaltimer - 4000);
		}
		else
		{
			setTimeout(function() { bgline.setMap(map); }, intervaltimer-3000);
		}
		setTimeout(function(){ polyline1.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline2.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline3.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline4.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline5.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline6.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline7.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline8.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline9.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline10.setMap(map); intervaltimer = intervaltimer + 100; }, intervaltimer);
		
		setTimeout(function()
			{ polyline11.setMap(map); 
			  infowindow2.open(map,marker2); 
			  map.infowindow2.resize(300,300);
			  
			  
			  }, intervaltimer);
		intervaltimer = intervaltimer + 1000;
		setTimeout(function(){ polyline12.setMap(map); infowindow2.close();}, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline13.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline14.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline15.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline16.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline17.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline18.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline19.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline20.setMap(map); infowindow3.open(map,marker3);}, intervaltimer);
		intervaltimer = intervaltimer + 1000;
		setTimeout(function(){ polyline21.setMap(map); infowindow3.close();}, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline22.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline23.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline24.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline25.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline26.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline27.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline28.setMap(map); }, intervaltimer);
		intervaltimer = intervaltimer + 100;
		setTimeout(function(){ polyline29.setMap(map); bgline.setMap(null);}, intervaltimer);
		intervaltimer = intervaltimer + 1500;
		if (reps < 9)
		{
			setTimeout(function(){ polyline1.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline2.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline3.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline4.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline5.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline6.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline7.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline8.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline9.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline10.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline11.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline12.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline13.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline14.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline15.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline16.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline17.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline18.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline19.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline20.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline21.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline22.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline23.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline24.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline25.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline26.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline27.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline28.setMap(null); }, intervaltimer);
			setTimeout(function(){ polyline29.setMap(null); }, intervaltimer);
		}
		reps++;
	}
	var infowindow = new google.maps.InfoWindow({
	  content: '<iframe src="distance.htm" width="300" height="300">',
	  });
	  
	var infowindowOwens = new google.maps.InfoWindow({
	  content: '<iframe src="distanceOwens.htm" width="300" height="300">',
	  });
	
	google.maps.event.addListener(marker, 'click', function() {
	  infowindow.setOptions({
		  maxWidth: 2000
	  		})
	  infowindow.open(map,marker);
	  });
	  
	google.maps.event.addListener(marker4, 'click', function() {
	  infowindowOwens.setOptions({
		  maxWidth: 2000
	  		})
	  infowindowOwens.open(map,marker4);
	  });
	
	 var resetbuttondiv = document.createElement('div');
	 var resetbutton = new resetMe(resetbuttondiv, map);
	 
	 resetbuttondiv.index = 1;
	 map.controls[google.maps.ControlPosition.TOP_LEFT].push(resetbuttondiv);
} 
  //Put the key in the function! 
function loadScript() 
{ 
	var script = document.createElement("script"); 
    script.type = "text/javascript"; 
    script.src =    
	"http://maps.googleapis.com/maps/api/js?key=AIzaSyDY0kkJiTPVd2U7aTOAwhc9ySH6oHxOIYM&sensor=false&callback=initialize"; 
    document.body.appendChild(script);
	loadMessage();// function that is being called from indexMessage.js that loads the initial load message on index.php
} 
window.onload = loadScript; 
google.maps.event.addDomListener(window, 'load', initialize);

function resetMe(controlDiv, map) {
	controlDiv.style.padding = '5px';
	var controlUI = document.createElement('div');
	controlUI.style.backgroundColor = 'white';
	controlUI.style.borderStyle = 'solid'; 
	controlUI.style.borderWidth = '2px';
	controlUI.style.cursor = 'pointer';
	controlUI.style.textAlign = 'center';
	controlUI.title = 'Reset to Mono Lake';
	controlDiv.appendChild(controlUI);
	
   	var controlText = document.createElement('div');
  	controlText.style.fontFamily = 'Arial,sans-serif';
  	controlText.style.fontSize = '15px';
  	controlText.style.paddingLeft = '2px';
  	controlText.style.paddingRight = '2px';
  	controlText.innerHTML = '<strong>Go back to Mono Lake</strong>';
  	controlUI.appendChild(controlText);
  
  	google.maps.event.addDomListener(controlUI, 'click', function() {
	var coords = new google.maps.LatLng(35.918278,-119.157715);
    map.panTo(coords)
  });
}

