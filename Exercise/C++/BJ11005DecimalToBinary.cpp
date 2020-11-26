#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string convert(int n, int b){
	//정답을 담을 스트링선언
	string ans = "";
	//n이 0이 아닐때 까지 나눠준다.
	while(n!=0){
		//n을 b로 나누어 나머지를 r에 저장한다.
		int r = n%b;
		//만약 나머지가 10보다 작으면 character로 변환후 그숫자를 ans에 넣어준다.
		if( r<10){
			ans += (char)(r+'0');
		}else{
			//만약 나머지가 10이상이면 대문자 A부터 표시해야 되므로 char로 변환후 A부터 카운트해서 해당 알파벳을 집어 넣는다.
			ans += (char)(r+'A');
		}
		n/=b;
	}
	//답을 거꾸로 리버스 해줘야한다.
	reverse(ans.begin(),ans.end());
	return ans;
}

int main(){
	int n, b;
	cin >> n >> b;
	cout<<convert(n,b);
}