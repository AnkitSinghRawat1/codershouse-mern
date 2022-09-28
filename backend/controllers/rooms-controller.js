const RoomDto = require("../dtos/room-dto");
const roomService = require("../services/room-service");

class RoomController {
  async create(req, res) {
    const { topic, roomType } = req.body;

    if (!topic || !roomType)
      return res.status(400).json({ message: "All Fields are Required!" });

    const room = await roomService.create({
      topic,
      roomType,
      ownerId: req.user._id,
    });

    return res.json(new RoomDto(room));
  }

  //   get All Rooms
  async index(req, res) {
    const rooms = await roomService.getAllRooms(["open"]);
    console.log(rooms);
    const allRooms = rooms.map((room) => new RoomDto(room));
    res.status(200).json(allRooms);
  }
}

module.exports = new RoomController();
