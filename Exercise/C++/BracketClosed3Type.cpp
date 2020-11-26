#include <iostream>
#include <string>
using namespace std;

string check(string s){
	int cnt1=0,cnt2=0,cnt3=0;
	int l = s.length();
	for(int i=0;i<l;i++){
		char c=s[i];
		switch (c) {
		case '(':
			cnt1++;
			break;
		case '{' :
			cnt2++;
			break;
		case '[':
			cnt3++;
			break;
		case ')':
			cnt1--;
			break;
		case'}':
			cnt2--;
			break;
		case']':
			cnt3--;
			break;
		default:
			return "Invalid Input";
			break;
		}
		if(cnt1<0&&cnt2<0&&cnt3<0){
			return "NO";
		}
	}
	if(cnt1==0&&cnt2==0&&cnt3==0){
			return "YES";
		}else{
			return "NO";
	}
}
int main(){
	int t;
	cin >> t;
	while(t--){
		string s;
		cin >> s;
		cout << check(s) << '\n';
	}
}
	

