import ParkingLotRepository from "../respository/ParkingLotRepository";

export default class GetParkingLot {
    parkingLotRepository: ParkingLotRepository

    constructor (parkingLotRepository: ParkingLotRepository) {
        this.parkingLotRepository = parkingLotRepository
    }
}