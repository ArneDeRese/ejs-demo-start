export const home = (req, res) => {
    res.render("home", {
        title: "Dinosaurs around the world",
        message: "Welcome to the world of dinosaurs",
    })
}

export const about = (req, res) => {
    res.render("default", {
        title: "About us",
        message: "We are a group a dino enthusiasts",
    })
};

export const contact = (req, res) => {
    res.render("contact", {
        title: "Contact",
        message: "Contact us at 025 252 625",
    })
};

export const privacy = (req, res) => {
    res.render("default", {
        title: "Privacy Policy",
        message: "We protect their privacy",
    })
};