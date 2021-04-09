const Profile = require('../model/Profile')

module.exports = {
    async index(req,res) {
     return res.render("profile", { profile: await Profile.get() })
    },

    async update(req, res) {
        // Req body para pegar os dados
        const data = req.body

        // Definir quantas semanas tem num ano
        const weeksPerYear = 52

        // Remover as semanas de férias do ano, para pegar quantas semanas tem em um mês
        const weeksPerMonth = (weeksPerYear - data["vacation-per-year"])/ 12

        // Quantas horas por semana estou trabalhando
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"]

        // Total de horas trabalhadas no mês
        const monthlyTotalHours = weekTotalHours * weeksPerMonth

        // Qual será o valor da minha hora?
        const valueHour = data["value-hour"] = data["monthly-budget"] / monthlyTotalHours

        const profile = await Profile.get()

        await Profile.update({
            ... profile,
            ...req.body,
            "value-hour": valueHour

        })

        return res.redirect('/profile')
    }
}