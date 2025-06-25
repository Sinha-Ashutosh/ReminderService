const { NOtificationTicket } = require('../models/index');
const { Op, where } = require('sequelize');

class TicketRepository {
    async getAll() {
        try {
            const tickets = await NOtificationTicket.findAll();
            return tickets
        } catch (error) {
            throw error;
        }
    }

    async create(data) {
        try {
            const ticket = await NOtificationTicket.create(data);
            return ticket;
        } catch (error) {
            throw error;
        }
    }

    async get(filter) {
        try {
            const tickets = await NOtificationTicket.findAll({
                where: {
                    status: filter.status,
                    notificationTime: {
                        [Op.lte]: new Date()
                    }
                }
            });
            return tickets;
        } catch (error) {
            throw error;
        }
    }

    async update(ticketId, data) {
        try {
            const ticket = await NOtificationTicket.findByPk(ticketId);
            if(data.status)
                ticket.status = data.status;
                await ticket.save();
                return ticket;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TicketRepository;