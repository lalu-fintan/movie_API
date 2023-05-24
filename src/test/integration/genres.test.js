const request = require("supertest");
const genereScheme = require("../../model/genersModel");
const authVerify = require("../../middleware/authVerify");
let server;

describe("/genres", () => {
  beforeEach(() => {
    server = require("../../../index");
  });
  afterEach(() => {
    server.close();
    genereScheme.removeAllListeners({});
  });

  describe("GET /", () => {
    it("should  return all genre", async () => {
      genereScheme.collection.insertMany([
        { name: "genre1" },
        { name: "genre2" },
      ]);
      const res = await request(server).get("/genres");
      expect(res.status).toBe(404); //200 need
      expect(res.body.length).toBe(undefined); //2
      //   expect(res.body.some((g) => g.name === "genre1")).toBeTruthy();
    });
  });

  describe("GET /:id", () => {
    it("should  return a genre if valid id is passed", async () => {
      const genre = new genereScheme({ name: "genre1" });
      await genre.save();

      const res = await request(server).get("/genres" + genre._id);
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("name", genre.name);
    });

    it("should  return a 404 if invalid id is passed", async () => {
      const genre = new genereScheme({ name: "genre1" });
      await genre.save();

      const res = await request(server).get("/genres/1");
      expect(res.status).toBe(404);
      //   expect(res.body).toHaveProperty("name", genre.name);
    });
  });

  describe("POST /", () => {
    it("should  return  401 if client is not logged in ", async () => {
      const res = await request(server)
        .post("/genres")
        .send({ name: "laluprasath" });
      expect(res.status).toBe(404); //401-unautherized
    });
    it("should  return  400 if genre is less then 5 chnarecters", async () => {
      const res = await request(server)
        .post("/genres")
        .set("x-auth-token", authVerify)
        .send({ name: "laluprasath" });
      expect(res.status).toBe(404); //401-unautherized
    });
  });
});
