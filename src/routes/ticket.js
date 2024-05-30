import express from "express";
import { fetchTicket, raiseTicket } from "../controller/ticket.js";

const ticketRouter = express.Router();

ticketRouter.get('/',fetchTicket)
ticketRouter.post('/',raiseTicket)

export default ticketRouter
