import { IsNotEmpty, IsString } from "class-validator";

export class EntrainementDTO {

    @IsNotEmpty()
    @IsString()
    readonly nom_entrainement: string;
}