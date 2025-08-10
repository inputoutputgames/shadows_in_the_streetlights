export class CharacterSheet extends ActorSheet{
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["sits", "sheet", "character"],
            template: "../../templates/actor/character-sheet.html",
            width: 400,
            height: 300
        });
    }

    getData(options){
        const data = super.getData(options);
        data.system = this.actor.system;
        return data;
    }
}