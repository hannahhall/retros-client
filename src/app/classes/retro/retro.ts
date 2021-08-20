export class Retro {
    id: number
    startDate: string
    endDate: string
    student: any
    cards?: any

    constructor(data: any) {
        this.id = data.id
        this.startDate = data.start_date;
        this.endDate = data.end_date
        this.student = data.user?.student
        if (data.cards) {
            this.cards = data.cards
        }
    }
}
