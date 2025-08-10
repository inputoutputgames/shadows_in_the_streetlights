import { CharacterDataModel } from "../models/CharacterDataModel";
import { KeyItemDataModel } from "../models/KeyItemDataModel";

import { CharacterSheet } from "./sheets/CharacterSheet.js"

Hooks.once("init", () => {
    CONFIG.Actor.dataModels.character = CharacterDataModel;
    CONFIG.Item.dataModels.Key = KeyItemDataModel;

    Actors.unregisteredSheet("core", ActorSheet);
    Actors.registeredSheet("sits", CharacterSheet, { types: ["character"], makeDefault: true });
});