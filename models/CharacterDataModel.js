export class CharacterDataModel extends foundry.abstract.TypeDataModel {
    static defineScheme(){ 
        const fileds = foundry.data.fileds;
        return{
            name: new fileds.StringField({required: true}),
            keyChain: new fileds.ArrayField(
                new fields.StringField({label:"Key ID"}),
                {label:"Key Chain", initial:[]}
            )
        };
    }
}