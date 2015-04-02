jQuery.sap.declare("chanzo.Component");
jQuery.sap.require("sap.m.messageBox");
// jQuery.sap.require("sap.m.routig.RouteMatchedHandler");

sap.ui.core.UIComponent.extend("chanzo.Component", {
	metadata: {
		name :"Component Name",
		dependencies: {
			libs: ["sap.m"]
		}
	},

	createContent: function(){

		var oModel = new sap.ui.model.json.JSONModel({
			defaultName : "Robert Ridgeway"
		});
		var oView =  sap.ui.view({
			viewName: "chanzo.view.App",
			type: sap.ui.core.mvc.ViewType.XML
		
		});

		oView.setModel(oModel);

		return oView;

	}


});


