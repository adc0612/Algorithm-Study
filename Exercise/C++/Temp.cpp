#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string convert(int n, int b){
	string ans="";
	while(n!=0){
		int r = n%b;
		if(r<10){
			ans+= (char) (r+'0');
		}else{
			ans+= (char) (r-10+'A');
		}
		n/=b;
	}
	reverse(ans.begin(), ans.end());
	return ans;

}

int main(){
	int n ,b;
	cin>>n>>b;
	cout<<convert(n,b)<<'\n';

}