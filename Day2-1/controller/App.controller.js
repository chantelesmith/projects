sap.ui.controller("chanzo.controller.App", {

	onPress:function(oEvent){
		var sName = this.getView()
		.getModel()
		.getPropery("/defaultName");
		sap.m.messageBox.alert("Hello " +sName);

	}
	
});