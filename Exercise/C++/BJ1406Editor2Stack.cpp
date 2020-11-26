#include <iostream>
#include <string>
#include <stack>
using namespace std;

int main(){
	string s;
	cin >> s;
	stack<char> left;
	stack<char> right;
	for(int i=0;i<s.length();i++){
		left.push(s[i]);
	}
	int t;
	cin >> t;
	while(t--){
		char c;
		cin >>c;

		if(c == 'L'){
			if(!left.empty()){
				right.push(left.top());
				left.pop();
			}
		}
		else if(c == 'D'){
			if(!right.empty()){
				left.push(right.top());
				right.pop();
			}
		}else if(c == 'B'){
			if(!left.empty()){
				left.pop();
			}
		}else if(c=='P'){
			char temp;
			cin >> temp;
			left.push(temp);
		}

	}

	while(!left.empty()){
		right.push(left.top());
		left.pop();
	}

	while(!right.empty()){
		cout << right.top();
		right.pop();
	}



	return 0;
}