// 옵셔널 체이닝

/*
예시
백앤드에서 데이터를 가져오고 DB나 객체 내 특정 속성이정의되어 있는지 확실하지 않은 소스에서 데이터를 가져오는 애플리케이션이 있다
*/

const fetchedUserData = {
    id: 'u1',
    name:'Max',
    job: {
        title: 'CEO',
        description : 'my own company'
    }
};

console.log(fetchedUserData.job.title);

// 근데 백엔드에서 데이터를 가져오면서 필요한 데이터를 모두 다 가져오지 못할 수 있다.
// 그래서어떤 이유로 job이 존재하지 않고 데이터를 가져오지 못하면 에러가 발생함

const fetchedUserDataNoJob= {
    id: 'u1',
    name:'Max',
};

// 아래처럼 작성하면 앞부분이 정의되지 않으면 뒤쪽 코드가 실행되지 않아서 런타임 에러를 피할 수 있다.
// 타입스크립트에게 job이 없단걸 알려줌
console.log(fetchedUserDataNoJob.job && fetchedUserDataNoJob.job.title);

// 더 나은 문법이 있다.
// 옵셔널체이닝
console.log(fetchedUserDataNoJob?.job?.title)
// 정의되어있는지 여부가 확실하지 않은 요소 다음에 물음표를 추가하자.
// 물음표를 추가해서 job이 정의되어 있는지 확인하고 정의되어 있으면 title에 접근할 수 있다.
// 컴파일하면 에러 발생
// job이 없는걸 알고 있으니까.
// 이 상황에선 job을 정상적으로 추가해주면 컴파일이 잘 될거다

// 객체 데이터의 중쵭된 속성과 객체에 안전하게 접근할 수 있게 해준다.
// 물음표 앞의 요소가 정의되지 않았다면, 그 이후에는 해당 요소에 접근하지 않아서 런타임 에러가 발생하지 않지만, 에러가 지속되지는 않음
// 사실상 데이터에 접근하기 전에 데이터의 존재 여부를 확인하는 if문으로 컴파일 된다고 한다.