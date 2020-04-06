import crypto from "crypto";
import connection from "../database/connection";

class OngController {
  async Index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  }

  async Create(req, res) {
    const { nome, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({
      id,
      nome,
      email,
      whatsapp,
      city,
      uf
    });
    return res.json({ id });
  }
}

export default new OngController();
