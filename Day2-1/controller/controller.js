sap.ui.controller("chanzo.controller.App", {

	onpress:function(oEvent){
		var sName = sap.ui.getCore()
		.byId("nameField")
		.getValue();
		sap.m.messageBox.alert("Hello " +sName);

	}
	
});