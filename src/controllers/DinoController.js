import { dinosaurs, navItems } from "../data/data.js"

export const index = (req, res) => {
    res.render("pages/dino",{
        title: "Our dinos",
        dinosaurs,
        navItems
    })
}
export const detail = (req, res) => {
    res.render("pages/detail-dino", {
        dinosaurs,
        navItems
    })
}