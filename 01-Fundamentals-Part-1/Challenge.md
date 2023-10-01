# JavaScript Fundamentals Challenge – Part 1

## 🥰Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), <br>
which is calculated using the formula: BMI = mass / (height \* height) (mass in kg and height in meters).

### Your task is to write some code to help them:
1. Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
2. Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
3. Create a Boolean variable 'markHigherBMI' containing information about
   whether Mark has a higher BMI than John.

### Test data:
- Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
- Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
<br>

## 🥰Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:<br>
### Your tasks:
1.  Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
    "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
2.  Modify the outputs above to use template literals to include the BMI values in the outputs. <br>
    Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
<br>

## 🥰Coding Challenge #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!<br>
### Your tasks:
1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.<br>
2. Compare the team's average scores to determine the winner of the competition, and print to the console: <br>
   "Dolphins win the trophy" if Dolphins win, or "Koalas win the trophy" if Koalas win, "Both win the trophy" if their average scores are equal.<br>
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
   team only wins if it has a higher score than the other team, and the same time a
   score of at least 100 points. Hint: Use a logical operator to test for minimum
   score, as well as multiple else-if blocks<br>
   내가 생각하기에 보너스는 너무 당연한 조건 아닌가ㅠ. 그래서 걍 조건을 바꿈. 각 점수중에서 최소 점수가 넘지 않으면 트로피 실격으로@\_@ㅋㅋㅋ<br>
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
   both teams have the same score and both have a score greater or equal 100
   points. Otherwise, no team wins the trophy<br>
   약간의 변형, 평균점수가 같다면 100점 이하의 최소 점수중에서 높은 점수가 이긴 팀이 진짜 이긴팀으로 업그레이드
### Test data:
- Data : Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
- Data Bonus 1 : Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
- Data Bonus 2 : Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
<br>

## 🥰Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.<br>
### Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement � (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
### Test data:
- Data 1: Test for bill values 275, 40 and 430
