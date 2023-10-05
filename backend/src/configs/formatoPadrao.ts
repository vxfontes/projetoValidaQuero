import { AppDataSource } from "../data-source";
import { Formato } from "../entity/Formato";

export async function definirFormatos() {
    await AppDataSource.manager.save(
        AppDataSource.manager.create(Formato, {
            titulo: "CSV",
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(Formato, {
            titulo: "XLSX",
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(Formato, {
            titulo: "XLS",
        })
    )
}