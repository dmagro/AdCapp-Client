define("rankings/keynotesrankview",
[
    "jquery",
    "backbone",
    "underscore",
    "handlebars",
    "./ranksinfo",
    "./genericeventcollection",
    "./awardview"
], function ($, Backbone, _, Handlebars, RanksInfo, GenericEventCollection, AwardView) {

	/**
	View da página de prémios dos keynotes

	@class KeynotesRankView
	@extends AwardView
	**/
	return AwardView.extend({

		/**
		Elemento da DOM onde são colocados todas as páginas

		@property el 
		@type String
		@static
		@final
		@default "div[data-role=content]"
		**/
		el: "div[data-role=content]",


		/**
		Id da página

		@property id 
		@type String
		@static
		@final
		@default "keynote-award-page"
		**/
		id: "keynote-award-page",


		/**
		Nome da página, apresentado no header

		@property pageName 
		@type String
		@static
		@final
		@default "Prémios Keynotes"
		**/
		pageName: "Prémios Keynotes",




		/**
		Construtor da classe. Faz o render da página, vai buscar a 
		informação dos prémios e rankings e quando tiver essa informação
		chama o método getStarted para fazer o rendering da página

		@constructor
		@protected
		@class KeynotesRankView
		**/
		initialize: function ()
		{
			_.bindAll(this);

			var self = this;
			this.ranksInfo = new RanksInfo({type:"keynote"});
			this.ranksInfo.fetch({
				success: function () {
					self.getStarted(AwardView, self, true, app.TYPES.KEYNOTE, new GenericEventCollection({type:"keynotes"}));
				}
			});

			
		},

	});

});