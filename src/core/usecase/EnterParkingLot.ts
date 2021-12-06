import ParkedCar from "../entity/ParkedCar";
import ParkingLot from "../entity/ParkingLot";
import ParkingLotRepository from "../respository/ParkingLotRepository";

export default class EnterParkingLot {
    parkingLotRepository: ParkingLotRepository

    constructor (parkingLotRepository: ParkingLotRepository) {
        this.parkingLotRepository = parkingLotRepository
    }

    async execute (code: string, plate: string, date: Date): Promise<ParkingLot> {
        const parkingLot: ParkingLot = await this.parkingLotRepository.getParkingLot(code)
        const parkedCar = new ParkedCar(code, plate, date)

        if (!parkingLot.isOpen(parkedCar.date)) throw new Error("The parking lot is closed")
        
        await this.parkingLotRepository.saveParkedCar(parkedCar.code, parkedCar.plate, parkedCar.date)

        return parkingLot
    }
}