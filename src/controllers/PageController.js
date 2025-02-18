import { person } from "../data/data.js";
import { navItems } from "../data/data.js";

export const home = (req, res) => {
    res.render("pages/home", {
        title: "Dinosaurs around the world",
        message: "Welcome to the world of dinosaurs",
        navItems,
    })
}

export const about = (req, res) => {
    res.render("pages/default", {
        title: "About us",
        message: "We are a group a dino enthusiasts",
        team: ["T-Rex", "Velociraptor", "Stegosaurus", "<strong>Premium</strong> Diplodocus"],
        navItems,
    })
};

export const contact = (req, res) => {
    res.render("pages/contact", {
        title: "Contact",
        message: "Contact us at 025 252 625",
        person,
        navItems,
    })
};

export const privacy = (req, res) => {
    res.render("pages/default", {
        title: "Privacy Policy",
        message: "We protect their privacy",
        team: false,
        navItems,
    })
};