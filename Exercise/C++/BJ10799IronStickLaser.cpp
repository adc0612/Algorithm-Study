#include <iostream>
#include <stack>
#include <string>
using namespace std;

int count (string s){
	int l = s.length();
	stack<int> stack;
	int ans = 0;
	for(int i =0;i<l;i++){
		char c = s[i];
		if( c == '('){
			stack.push(i);
		}else{
			if( stack.top() +1 ==i){
				ans += stack.size();
			}else{
				stack.pop();
				ans += 1;
			}
		}
	}
	return ans;
}
int main(){
	string s;
	cin >> s;
	cout << count(s) << '\n';
}

