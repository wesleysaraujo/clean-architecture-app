import EnterParkingLot from "../src/core/usecase/EnterParkingLot"
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory"

test("Should enter parking lot", async function () {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory()
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory)
    const parkingLot = await enterParkingLot.execute("shopping", "GQZ-2G88", new Date("2021-12-03T17:00:00"))

    expect(parkingLot.code).toBe("shopping")
})