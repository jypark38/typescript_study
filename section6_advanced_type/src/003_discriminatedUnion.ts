// 특수한 typeof 타입가드나 타입 가드를 도와주는 discriminated Union을 쓸 수 있당
// 타입가드를 쉽게 구현할 수 있게 해주는 유니언타입이다
// 객체타입으로 작업할 때도 사용할 수 있다.

interface Brid{
    flyingSpeed: number;
}
interface Horse{
    runningSpeed: number;
}

type Animal = Brid | Horse;

// animal의 속도를 출력하는 함수를 작성하려 하는데 flyingSpeed와 runningSpeed가 구분되어 있는 상황
// 예) 모든 animal에 flyingSpeed가 없는 상황임
// 아래처럼 할 수 있다.
function moveAnimalWithIn(animal: Animal){
    if ('flyingSpeed' in animal){
        console.log('Moving with speed: ' + animal.flyingSpeed)
    }
    if ('runningSpeed' in animal){
        console.log('Moving with speed: ' + animal.runningSpeed)
    }
}
// 근데 이런식이면 동물을 많이 입력할 수록 확인해야할 사항이 많아진다
// 그리고 오타가 나서 작동이 안되는 상황도 있을거다.
// 그리고 interface 로 작업중이라 instanceOf 도 힘들다. [animal instanceOf Bird] (인터페이스는 자스로 컴파일되지 않음)

// 이때 유니언과 추가 프로퍼티의 일부가 되어야 하는 객체를 인터페이스마다 입력해서 Discriminated Union 을 만들 수 있다.
// 중요한점은 인터페이스를 구축할때 type은 반드시 문자열 "bird"를 포함해야 한다는 것이다.
interface DiscriminatedBird{
    type: 'bird';
    flyingSpeed: number;
}
interface DiscriminatedHorse{
    type: 'horse';
    runningSpeed: number;
}

type DiscriminatedAnimal = DiscriminatedBird | DiscriminatedHorse;

// 이후 스위치문을 이용해서 아래처럼 할 수 있다.
function moveAnimalWithDiscriminated(animal: DiscriminatedAnimal){
    let speed;
    switch (animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break
        case 'horse':
            speed = animal.runningSpeed;
            break
    }
    console.log('Moving at speed' + speed);
}

moveAnimalWithDiscriminated({type:'bird', flyingSpeed:10})

// 유니언을 구성하는 모든 객체에 하나의 공통 속성이 있고 그 속성이 객체를 설명한다.
// 그래서 switch문에서 타입 안정성을 갖추고, 객체에 어떤 속성을 사용할 수 있는지 파악할 수 있다.

// 그래서 객체랑 유니언 타입을 사용한 작업에서 매우 유용한 패턴이다.
// 인터페이스랑도 작동한다.
// 주어진 프로퍼티의 존재 여부를 확인하거나, instanceOf를 사용하는게 아니라 실제 존재하는 속성을 사용해서
// 어떤 형태의 객체로 작업하는지 알 수 있다.
// 오타 위험으로도 벗어나게 된다.