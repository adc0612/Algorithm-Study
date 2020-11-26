#include <iostream>
#include <string>
#include <cstdio>
using namespace std;

string reverse (string str){
	string r = "";

	for(int i = str.length()-1;i>=0;i--){
		r+=str[i];
	}
	return r;
}

int main(){
	string s;
	std::getline(cin, s);
	cout << reverse(s) <<'\n';
	
	return 0;
}