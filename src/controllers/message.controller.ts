import db from "../database/pg.connect";
import type express from "express"
import { v4 as uuidv4 } from "uuid";

export const createMessage = (req: express.Request, res) => {
    const {
        conteudo,
        destinatario,
        dataAgendada,
        status,
        anexo }: Message = req.body;
    const id = uuidv4();

    const sql = 'INSERT INTO mensagem(conteudo, destinatario, data_agendada, status, anexo, id) VALUES($1, $2, $3, $4, $5, $6)'

    if (!conteudo || !destinatario || !dataAgendada) {
        return res.status(400).json({ message: "Missing required fields" });
    }


    db.query(sql, [conteudo, destinatario, dataAgendada, status, anexo, id])
        .then(() => {
            res.status(201).json({ message: "message created!" })
        })
        .catch((error) => {
            res.status(500).json({ message: `error on create: ${error}` })
        })

}

export const readMessageById = (req:express.Request, res: express.Response) => {
    const sql = 'SELECT * FROM mensagem WHERE id = $1';
    const { id } = req.params;

    db.query(sql, [id])
        .then((mensagem) => {
            mensagem.length > 0 ? res.status(200).json({ message: "success!", mensagem }) : res.status(404).json({ message: "there are not messages with this id!" });

        })
        .catch((error) => {
            res.status(500).json({ message: `error on read: ${error}` })
        })
}

export const readMessages = (req:express.Request, res: express.Response) => {
    const sql = 'SELECT * FROM mensagem;';

    db.query(sql)
        .then((messages) => {
            res.status(200).json({ message: "success!", messages })
        })
        .catch((error) => {
            res.status(500).json({ message: `error on read: ${error}` })
        })
}

export const updateMessageById = (req:express.Request, res: express.Response) => {
    const getByIdSql = 'SELECT * FROM mensagem WHERE id = $1';
    const sql = 'UPDATE mensagem SET conteudo = $1, destinatario = $2, data_agendada = $3,status = $4, anexo = $5 WHERE id = $6;';

    const {
        conteudo,
        destinatario,
        dataAgendada,
        status,
        anexo }: Message = req.body;

    const { id } = req.params;

    db.query(getByIdSql, [id])
    .then(( mensagem ) => {
     if(mensagem.length > 0) {
        db.query(sql, [conteudo, destinatario, dataAgendada, status, anexo, id])
        .then(() => {
            res.status(200).json({ message: "updated!" })
        })
        .catch((error) => {
            res.status(500).json({ message: `error on update: ${error}` })
        })
     } else {
        res.status(404).json({message: "message not find with this id"})
     }
    })
    
}

export const deleteMessageById = (req:express.Request, res: express.Response) => {
    const getByIdSql = 'SELECT * FROM mensagem WHERE id = $1';
    const sql = 'DELETE FROM mensagem WHERE id = $1;';

    const { id } = req.params;
    db.query(getByIdSql, [id])
    .then((mensagem) => {
        if(mensagem.length > 0) {
            db.query(sql, [id])
            .then(() => {
                res.status(201).json({ message: "deleted!" })
            })
            .catch((error) => {
                res.status(500).json({ message: `error on delete: ${error}` })
            })
         } else {
            res.status(404).json({message: "message not find with this id"})
         }
    })
}