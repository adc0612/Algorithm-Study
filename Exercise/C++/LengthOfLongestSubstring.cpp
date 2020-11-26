#include <iostream>
#include <string>
using namespace std;
string t ="";
int findLongest(string s){
	int n = s.length();
	int ans = 0;
	

	int index[128];

	for(int j=0, i=0;j<n;j++){
		i = max(index[s[j]],i);
		ans = max(ans,j-i+1);
		index[s[j]] = j+1;
		t+=s[j];
	}
	return ans;
}

int main(){
	string s = "pwwkew";
	cout << findLongest(s)<<'\n';
	cout << t << '\n';
	return 0;
}