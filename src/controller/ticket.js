import Ticket from "../model/ticket.js";

const fetchTicket = async(req,res)=>{
    try{
        const ticketData = await Ticket.find({})
        res.status(200).send(ticketData)
    }catch(error){
        console.log(error)
        res.send(error)
    }
}

const raiseTicket = async(req,res)=>{
    try{
        const newTicketData = req.body
        const newTicketObject = new Ticket({...newTicketData})
        const saveTicket = await newTicketObject.save()
        res.status(201).json({message:"Success", saveTicket})
    }catch(error){
        console.error('Error raising ticket:', error);
        if (error.code === 11000) {
            return res.status(409).json({ error: 'Duplicate key error', details: 'AssetID or TicketID already exists' });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
}

export{
    fetchTicket, raiseTicket,
}