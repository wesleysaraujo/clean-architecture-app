export default class ParkedCar {
    code: string
    plate: string
    date: Date

    constructor (code: string, plate: string, date: Date) {
        
        if (!/^[A-Za-z]{3}-[0-9]{1}[A-Za-z0-9]{1}[0-9]{2}$/.test(plate)) {
            throw new Error('Invalid Plate')
        }
        
        this.code = code
        this.plate = plate
        this.date = date
    }
}