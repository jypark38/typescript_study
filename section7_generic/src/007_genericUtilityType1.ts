// 특정 유틸리티 기능을 제공하는 제네릭 타입 소개
// 첨부된 자료에 모든 내장 유틸리티 타입에 대한 문서가 있다
// 컴파일 전까지만 존재하고, 컴파일 되고나서는 이 타입들이 추가적인 안정성과 유연성을 제공해준다.

/////////////
// Partial //
/////////////

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  return { title: title, description: description, completeUntil: date };
}

// 위와 같이 구현하지 않는다고 해보자
function createCourseGoal2(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: CourseGoal = {};
  // 여기서 선언한 객체의 타입을 지정해줘야한다는 에러가 일차적으로 나온다
  // 그리고 지정을 해주면 빈객체가 타입에 맞지 않는다는 것을 지적한다.
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal;
}

// 이럴때 partial타입을 유용하게 사용할 수 있다.

function createCourseGoalWithPartial(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

// 파셜타입은 중괄호쌍이 앞으로 courseGoal이 되는 객체라는 것을 알려준다.
// 파셜은 우리가 만든 타입 전체를 모든 프로퍼티가 선택적이게 바꿔버린다.
// 그래서 빈객체부터 시작해서 단계적으로 모든 요소를 추가할 수 있다.
// 반환에서 문제가 생기는데, CourseGoal의 파셜 타입을 반환하기 때문이다
// 형변환으로 해결할 수 있다.

// 이렇게 파셜타입은 객체 타입이나 인터페이스를 일시적으로 optional하게 바꿔서
// 모든 프로퍼티를 일시적으로 선택적이 되도록 해야 하는 경우에 유용하다
