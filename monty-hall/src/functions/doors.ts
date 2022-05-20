import DoorModel from '../model/door';

export function createDoors(qtd: number, withGift: number): DoorModel[] {
  return Array.from({ length: qtd}, (_, i) => {
    const number = i + 1
    const hasGift = number === withGift
    return new DoorModel(number, hasGift) 
  })
}

export function updateDoors(doors: DoorModel[], doorChanged: DoorModel): DoorModel[] {
  return doors.map(curDoor => {
    const isEqualDoorChanged = curDoor.numero === doorChanged.numero
    if(isEqualDoorChanged) return doorChanged

    return doorChanged.aberta ? curDoor : curDoor.desselecionar()
  })
}