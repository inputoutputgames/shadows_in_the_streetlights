export class KeyItemDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            label: new fields.StringField({required:true, label:"Key Label"}),
            unlocks: new fields.StringField({required: true, label:"Door ID"})
        };
    }
}