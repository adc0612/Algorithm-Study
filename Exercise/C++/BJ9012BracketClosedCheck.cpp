#include <iostream>
#include <string>
using namespace std;
string check(string s){
	int cnt =0;
	int l = s.length();
	for(int i =0;i<l;i++){
		char c = s[i];
		if( c=='('){
			cnt++;
		}
		else{
			cnt--;
		}
		if(cnt<0){
			return "NO";
		}
	}
	if(cnt==0){
		return "YES";
	}else{
		return "NO";
	}
}
int main(){
		int t;
		cin >>t;
		while(t--){
			string s;
			cin >>s;
			cout << check(s) << '\n';
		}
		return 0;
	}
